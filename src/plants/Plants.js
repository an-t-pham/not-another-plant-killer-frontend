import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import AddToCollection from './AddToCollection';
import { connect } from 'react-redux';
import { fetchCollections } from '../actions/fetchCollections';
import { fetchPlants } from '../actions/fetchPlants';

import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/styles';

import pink from '@material-ui/core/colors/pink';

const styles = {
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
 };
  

class Plants extends React.Component {
    componentDidMount() {
          this.props.fetchCollections(this.props.user.id);
          this.props.fetchPlants();
    }

    componentDidUpdate(prevProps) {
      const prevPlants = prevProps.plants.map(p => p.attributes.name)
      const currentPlants = this.props.plants.map(p => p.attributes.name)
      const hasChanged = prevPlants.every(p => currentPlants.includes(p))
  
      if (prevProps.user === null || !hasChanged) {
        this.props.fetchPlants();
      }
    }

   

    
    render() { 
        const { classes } = this.props

        return (
        <div>
            <Grid container className={classes.root} justify="center" >
          
                {this.props.plants && this.props.plants.map(plant => plant && (
            <>
              <Grid key={plant.id} className={classes.control} item> 
                  
                  <Paper className={classes.paper}>
                    <Link to={`/plants/${plant.attributes.slug}`} component={RouterLink} style={{ color: pink[200] }}> 
                       <img src={plant.attributes.image_url} width="100%" height="360px" alt={plant.attributes.name}/> <br />
                       <div className={classes.itemPadding}>{plant.attributes.formatted_name}</div> 
                       
                    </Link>
                     
                    <div className={classes.itemPadding} style={{ paddingBottom: "10px" }}>{this.props.collections.length > 0 && <AddToCollection plant={plant} collections={this.props.collections}/>}</div>
                  </Paper>
              
              </Grid>
            </>
              ))}
        
            </Grid>
        </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        collections: state.collections,
        plants: state.plants
    }
}
export default connect(mapStateToProps, { fetchCollections, fetchPlants })(withStyles(styles)(Plants));