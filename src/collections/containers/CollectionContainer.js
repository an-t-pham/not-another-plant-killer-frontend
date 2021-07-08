import React, { useState, useEffect, useMemo } from 'react';

import { useSelector, useDispatch } from 'react-redux';
import Collection from '../Collection';
import CollectionInput  from '../CollectionInput';

import { deleteCollection } from '../../actions/deleteCollection';
import { fetchCollections } from '../../actions/fetchCollections';
import { editCollection } from '../../actions/editCollection';
import { deletePlantfromCollection } from '../../actions/deletePlantfromCollection';

import Modal from '@material-ui/core/Modal';

import FabButton from '../../components/FabButton';



// class CollectionContainer extends React.Component {
const CollectionContainer = ({ match, history }) => {
  const dispatch = useDispatch();

  const collections = useSelector((state) => state.collections);    
  const user = useSelector((state) => state.user);  
  const plants = useSelector((state) => state.plants);  

    //  componentDidUpdate() {
    //    if (this.props.user && this.props.collections.length === 0) {
    //      return this.props.fetchCollections(this.props.user.id)
    //    } 
    //  }
useEffect(() => {
   if (user && collections.length === 0) {
     return dispatch(fetchCollections(user.id))
   }
},[])

const [anchorEl, setAnchorEl] = useState(null);
const open = Boolean(anchorEl);

const handleOpen = (event) => {
  setAnchorEl(event.currentTarget);
};

const handleClose = () => {
  setAnchorEl(null);
};

    // state = {
    //     showEditForm: false
    // }

  //   handleOpen = () => {
  //     this.setState({
  //       showEditForm: true
  //     })
  //  }
  
  //    handleClose = () => {
  //       this.setState({
  //         showEditForm: false
  //       })
  //    }


  const collection = useMemo(() => {
      let collectionSlug = match && (match.params.slug);
      let collection = collections && (collections.find(collection => collection.attributes.slug === collectionSlug)) ;
      return collection
    }, [collections, match])
 

  const handleSubmit = (collectionData) => {
        user && (dispatch(editCollection(user.id, collection.id, collectionData)));
        history.push("/profile/collections");
        handleClose();
    }

  const deleteCollection = () => {
        dispatch(deleteCollection(user.id, collection.id));
        history.push("/profile/collections");
     }

  const deletePlantfromCollection = (plantData) => {
        user && (dispatch(deletePlantfromCollection(user.id, collection.id, plantData)));
     }

  // render() {
    return (
      
       <div>
            <Collection collection={collection} plants={plants} deletePlantfromCollection={deletePlantfromCollection}/>
            <div style={{position: 'fixed', top: '120px', right: '20px'}}>
              <FabButton title="Edit Collection" button="edit" handleAction={handleOpen} right="40px" />
            </div>
            
            <Modal
              open={open}
              onClose={handleClose}
              value={this.state.name}
            > 
            <CollectionInput collection={collection}  handleSubmit={handleSubmit} /> 
            </Modal>

            <div style={{position: 'fixed', top: '190px', right: '20px'}}>
               <FabButton title="Delete Collection" button="delete" handleAction={this.deleteCollection} right="50px" />
            </div>
           
       </div>
    )
  // }

}

// const mapStateToProps = state => {
//     return {
//         collections: state.collections,
//         user: state.user,
//         plants: state.plants
//     }
// }


export default CollectionContainer;
