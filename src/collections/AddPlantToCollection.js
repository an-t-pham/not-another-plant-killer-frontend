import React, { useEffect, useState } from 'react';
import { addPlantToCollection } from '../actions/addPlantToCollection';
import { useSelector, useDispatch } from 'react-redux';

import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import Grid from '@material-ui/core/Grid';

import SendIcon from '@material-ui/icons/Send';
import pink from '@material-ui/core/colors/pink';
import teal from '@material-ui/core/colors/teal';

const useStyles = makeStyles({
  select: {
      width: 200
  },
 });

  const AddPlantToCollection = ( {collection, plants, handleClose} ) => {
    const classes = useStyles();

    const [plantId, setPlantId] = useState(plants[0].id);
    const [availablePlants, setAvailablePlants] = useState([]);
    const user = useSelector((state) => state.user);
    const dispatch = useDispatch();
    
    useEffect(() => {
      setAvailablePlants(plants.filter(p => !collection.attributes.plants.some(pc => pc.id === p.id)))
     }, [plants, collection])
  
    const handleChange = (event) => {
      setPlantId(event.target.value);
    }
  
    const handleSubmit = (event) => {
      event.preventDefault();
      const thePlant = plants.find(plant => plant.id === plantId);
      dispatch(addPlantToCollection(user.id, collection.id, thePlant));
      setPlantId(plants[0].id);
      setAvailablePlants(availablePlants.filter(p => p.id !== thePlant.id))
      handleClose();
    }
  
    const plantOptions = plants && availablePlants.map(plant => (
      <MenuItem name={plant.attributes.name} value={plant.id} key={`${plant.id}new`} style={{ color: pink[200] }}>{plant.attributes.name}</MenuItem>
    ));

         return (
            <form style={{ backgroundColor: teal[900], color: pink[100], padding: '15px', width:'15%', margin:'auto', marginTop:'100px'}} >
                <Grid
                container
                direction="row"
                justify="space-between"
                alignItems="flex-end"
                xl
                >
                <div>
                 <InputLabel id="add-plant-to-collection" style={{ color: pink[200] }} >Add a Plant:</InputLabel>
                   <Select
                   className={classes.select}
                   value={plantId}
                   onChange={handleChange}
                   autoWidth
                   label="Add a Plant"
                   style={{ color: pink[200] }}
                   >  
                     <MenuItem value="" style={{ color: pink[200] }} >
                       <em>Select a Plant</em>
                     </MenuItem>
                       {plantOptions}
                  </Select>
                </div>
            
            
               <SendIcon style={{ paddingRight: "45px", color: pink[200] }} onClick={(e) => handleSubmit(e)}/>
            
            </Grid>
            
            </form>

         )
}

export default AddPlantToCollection;
