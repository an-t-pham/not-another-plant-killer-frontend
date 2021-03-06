import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchCollections } from "../../actions/fetchCollections";
import Collections from "../Collections";
import { addCollection } from "../../actions/addCollection";
import CollectionInput from "../CollectionInput";
import FabButton from "../../components/FabButton";
import Modal from "@material-ui/core/Modal";
import useForm from "../../hooks/useForm";

const CollectionsContainer = () => {
	const { handleOpen, handleClose, open } = useForm();

	const dispatch = useDispatch();

	const user = useSelector((state) => state.user);

	const collections = useSelector((state) => state.collections);
	useEffect(() => {
		user && !collections && (dispatch(fetchCollections(user.id)));
	}, [user, collections, dispatch]);

	const handleSubmit = (collectionData) => {
		dispatch(addCollection(collectionData, user.id));
		handleClose();
	};

	return (
		<div>
			<Collections collections={collections} /> 

			<div style={{position: "fixed", top: "50px", right: "20px"}}>
				<FabButton title="Create New Collection" button="add" handleAction={handleOpen}/>
			</div>
            
			<Modal
				open={open}
				onClose={handleClose}
			>
				<CollectionInput handleSubmit={handleSubmit} />
			</Modal>
                 
		</div>
	);

};
export default CollectionsContainer;