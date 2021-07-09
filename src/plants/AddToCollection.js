import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { addPlantToCollection } from '../actions/addPlantToCollection';

import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

import Grid from '@material-ui/core/Grid';

import SendIcon from '@material-ui/icons/Send';
import pink from '@material-ui/core/colors/pink';


const useStyles = makeStyles({
    formControl: {
        width: "100%"
        
      },
      select: {
          width: 200
      },
 });

const AddToCollection = ( { plant, collections } ) => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const [collectionId, setCollectionId] = useState("")
  const [availableCollections, setAvailableCollections] = useState([]);

  useEffect(() => {
     setAvailableCollections(collections.filter(c => !plant.attributes.collections.some(cp => cp.id === c.id)))
  }, [collections, plant]);

  
  const handleChange = event => {
      setCollectionId(event.target.value);
    }
  
  const handleSubmit = event => {
      event.preventDefault();
      const collection = collections.find(collection => collection.id === collectionId);
      dispatch(addPlantToCollection(collection.attributes.user_id, collection.id, plant));
      setCollectionId("");
      setAvailableCollections(availableCollections.filter(c => c.id !== collection.id));
    }
    
    const collectionOptions = () => {
            return availableCollections.map(collection => (
                <MenuItem name={collection.attributes.name} value={collection.id} key={`${collection.id}new`} style={{ color: pink[200] }}>{collection.attributes.name}</MenuItem>
             ))
    }

    const text = "No Collection has been created" ;
      return (
        <> 
          {  (collections.length > 0) ? 
          <FormControl className={classes.formControl}>
              <Grid
              container
              direction="row"
              justify="space-between"
              alignItems="flex-end"
              xl
              >
                  <div>
                   <InputLabel id="add-to-collection" style={{ color: pink[200] }} >Add To Collection:</InputLabel>
                     <Select
                     className={classes.select}
                     value={collectionId}
                     onChange={handleChange}
                     autoWidth
                     label="Add To Collection:"
                     >  
                       <MenuItem style={{ color: pink[200] }} value="" >
                         <em>Select a Collection</em>
                       </MenuItem>
                         {collectionOptions()}
                    </Select>
                  </div>
     

                 <SendIcon style={{ paddingRight: "45px", color: pink[200] }} onClick={(e) => handleSubmit(e)}/>
       
             </Grid>
         
            </FormControl>
             :  <h1>{text}</h1>
             }
                
            
       </>
      )
}


export default AddToCollection;
