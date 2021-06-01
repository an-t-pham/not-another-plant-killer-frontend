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
import DeleteIcon from '@material-ui/icons/Delete';
import Tooltip from '@material-ui/core/Tooltip';
import Typography from '@material-ui/core/Typography';
import Modal from '@material-ui/core/Modal';


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

const Collection = ( props ) => {
    const classes = useStyles();

    
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
  
    const handleOpen = (event) => {
      setAnchorEl(event.currentTarget);
    };
  
    const handleClose = () => {
      setAnchorEl(null);
    };

    if(!props.collection) return null && <Redirect to="profile/collections" />;
    const text = <Typography variant="body1" style={{ color: pink[200] }}> No Plant has been added in Collection </Typography>
    
    return (
        <div> 
            <Typography variant="h5" style={{ color: pink[200], paddingLeft: "40px" }}>
                {props.collection.attributes.name}
            </Typography>

            <Grid container className={classes.root} justify="center" >
              {props.collection.attributes.plants.length > 0 ? (props.collection.attributes.plants.map(plant => 
           <>
             <Grid key={`${plant.id}` + 'collection'} className={classes.control} item> 
             
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
                         <DeleteIcon onClick={() => props.deletePlantfromCollection(plant)} />
                     </Tooltip>

                    </Grid>
                 
                </Paper>
                
              
             </Grid>
           </>
           
           )) : text} 
  
          </Grid>
            
          <div style={{position: 'fixed', top: '50px', right: '20px'}}>
             <FabButton title="Add a Plant" button="add" handleAction={handleOpen} /> 
          </div>

             <Modal
                open={open}
                onClose={handleClose}
             >
                <AddPlantToCollection collection={props.collection} plants={props.plants} handleClose={handleClose}/>
            </Modal>
        </div>
    )
}

export default Collection;