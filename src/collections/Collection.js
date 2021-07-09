import React from 'react';
import AddPlantToCollection from './AddPlantToCollection';
import FabButton from '../components/FabButton'

import { Redirect } from 'react-router';
import { Link as RouterLink } from 'react-router-dom';

import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Link from '@material-ui/core/Link';
import pink from '@material-ui/core/colors/pink';
import teal from '@material-ui/core/colors/teal';

import DeleteIcon from '@material-ui/icons/Delete';
import Tooltip from '@material-ui/core/Tooltip';

import Typography from '@material-ui/core/Typography';
import Modal from '@material-ui/core/Modal';

import useForm from '../hooks/useForm';


const useStyles = makeStyles({
  root: {
    flexGrow: 1
  },
  paper: {
    width: 300,
    height: '100%'
  },
  control: {
    padding: 6
  },
  temPadding: {
    paddingLeft: 10
  }
 });

const Collection = ( { collection, plants, deletePlantfromCollection } ) => {
    const classes = useStyles();
    const { handleOpen, handleClose, open } = useForm();

    if(!collection) return null && <Redirect to="profile/collections" />;
    const text = <Typography variant="body1" style={{ color: pink[200] }}> No Plant has been added in Collection </Typography>
    
    return (
        <div> 
            <Typography variant="h4" style={{ color: pink[200], backgroundColor: teal[800], padding: '20px', marginLeft: '40px' }}>
                {collection.attributes.name}
            </Typography>

            <Grid container className={classes.root} justify="center" >
              {collection.attributes.plants.length > 0 ? (collection.attributes.plants.map(plant => 
           <>
             <Grid key={`${plant.id}collection`} className={classes.control} item> 
             
                <Paper className={classes.paper}>
                <img src={plant.image_url}  width="100%" height="360px" alt={plant.name}/> <br />
                  <Grid
                     container
                     direction="row"
                     justify="space-between"
                     alignItems="flex-end"
                     style={{ color: pink[200], padding: "5px"}} 
                  >
                      <Link to={`/plants/${plant.slug}`} style={{ color: pink[200]}} component={RouterLink}> 
                         <div className={classes.itemPadding}>{plant.formatted_name}</div>
                      </Link>
                
                      <Tooltip title="Delete from Collection" aria-label="delete">
                         <DeleteIcon onClick={() => deletePlantfromCollection(plant)} />
                     </Tooltip>

                    </Grid>
                 
                </Paper>
                
              
             </Grid>
           </>
           
           )) : text} 
  
          </Grid>
            
          <div style={{position: 'fixed', top: '50px', right: '20px'}}>
             <FabButton title="Add a Plant" button="add" handleAction={handleOpen}/> 
          </div>

             <Modal
                open={open}
                onClose={handleClose}
             >
                <AddPlantToCollection collection={collection} plants={plants} handleClose={handleClose}/>
            </Modal>
        </div>
    )
}

export default Collection;