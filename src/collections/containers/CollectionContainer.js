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
import useForm from '../../hooks/useForm';

const CollectionContainer = ({ match, history }) => {
    const dispatch = useDispatch();
    const { handleClose, open } = useForm();
    const collections = useSelector((state) => state.collections);    
    const user = useSelector((state) => state.user);  
    const plants = useSelector((state) => state.plants);  

  useEffect(() => {
     if (user && collections.length === 0) {
       return dispatch(fetchCollections(user.id))
     }
  },[user, collections.length, dispatch])

  const collection = useMemo(() => {
    let collectionSlug = match && (match.params.slug);
    return collections && (collections.find(collection => collection.attributes.slug === collectionSlug)) ;
  }, [collections, match])
 

  const handleSubmit = (collectionData) => {
    user && dispatch(editCollection(user.id, collection.id, collectionData));
    history.push("/profile/collections");
    handleClose();
  }

  const deleteTheCollection = () => {
    user && dispatch(deleteCollection(user.id, collection.id));
    history.push("/profile/collections");
  }

  const deleteThePlantfromCollection = (plantData) => {
    user && dispatch(deletePlantfromCollection(user.id, collection.id, plantData));
  }

 
  return (   
    <div>
        <Collection collection={collection} plants={plants} deletePlantfromCollection={deleteThePlantfromCollection}/>
          <div style={{position: 'fixed', top: '120px', right: '20px'}}>
            <FabButton title="Edit Collection" button="edit" right="40px" />
          </div>
            
        <Modal
          open={open}
          onClose={handleClose}
        > 
          <CollectionInput collection={collection}  handleSubmit={handleSubmit} /> 
        </Modal>

        <div style={{position: 'fixed', top: '190px', right: '20px'}}>
          <FabButton title="Delete Collection" button="delete" handleAction={deleteTheCollection} right="50px" />
        </div>
           
    </div>
  )
}

export default CollectionContainer;
