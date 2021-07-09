import React, { useEffect } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import AddToCollection from './AddToCollection';
import { useSelector, useDispatch } from 'react-redux';
import { fetchCollections } from '../actions/fetchCollections';
import { fetchPlants } from '../actions/fetchPlants';

import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';

import pink from '@material-ui/core/colors/pink';

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
      itemPadding: {
        paddingLeft: 10
      }
 });
  

const Plants = ( { user } ) => {
   const dispatch = useDispatch();
   const classes = useStyles();
   const collections = useSelector(state => state.collections)
   const plants = useSelector(state => state.plants)

   useEffect(() => {
       dispatch(fetchCollections(user.id));
       dispatch(fetchPlants())
   }, [dispatch, user, plants])

        return (
        <div>
            <Grid container className={classes.root} justify="center" >
          
                {plants && plants.map(plant => plant && (
            <>
              <Grid key={plant.id} className={classes.control} item> 
                  
                  <Paper className={classes.paper}>
                    <Link to={`/plants/${plant.attributes.slug}`} component={RouterLink} style={{ color: pink[200] }}> 
                       <img src={plant.attributes.image_url} width="100%" height="360px" alt={plant.attributes.name}/> <br />
                       <div className={classes.itemPadding}>{plant.attributes.formatted_name}</div> 
                       
                    </Link>
                     
                    <div className={classes.itemPadding} style={{ paddingBottom: "10px" }}>{collections.length > 0 && <AddToCollection plant={plant} collections={collections}/>}</div>
                  </Paper>
              
              </Grid>
            </>
              ))}
        
            </Grid>
        </div>
        )
   
}

export default Plants;