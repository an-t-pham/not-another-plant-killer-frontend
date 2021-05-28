import React from 'react';
import { connect } from 'react-redux';
import { addPlantToCollection } from '../actions/addPlantToCollection';

import { withStyles } from '@material-ui/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

import Grid from '@material-ui/core/Grid';

import SendIcon from '@material-ui/icons/Send';
import pink from '@material-ui/core/colors/pink';


const styles = {
    formControl: {
        width: "100%"
        
      },
      select: {
          width: 200
      },
 };

class AddToCollection extends React.Component {
    state = {
        collectionId: "", 
        availableCollections: []
    };
    
    componentDidMount() {
        this.setState({
            availableCollections: this.props.collections.filter(c => !this.props.plant.attributes.collections.some(cp => cp.id === c.id))
        })
    }

  
    handleChange = event => {
      this.setState({
          collectionId: event.target.value
        });
    }
  
    handleSubmit = event => {
      event.preventDefault();
      const collection = this.props.collections.find(collection => collection.id === this.state.collectionId);
      this.props.addPlantToCollection(collection.attributes.user_id, collection.id, this.props.plant);
      this.setState({
        collectionId: "",
        availableCollections: this.state.availableCollections.filter(c => c.id !== collection.id)
      });
    }
    
    collectionOptions = () => {
            return this.state.availableCollections.map(collection => (
                <MenuItem name={collection.attributes.name} value={collection.id} key={`${collection.id}` + 'new'}>{collection.attributes.name}</MenuItem>
             ))
    }

  
    render() {
        const { classes } = this.props;
        const text = "No Collection has been created" ;
      return (
        <> 
          {  (this.props.collections.length > 0) ? 
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
                     value={this.state.collectionId}
                     onChange={this.handleChange}
                     autoWidth
                     label="Add To Collection:"
                     >  
                       <MenuItem value="" >
                         <em>Select a Collection</em>
                       </MenuItem>
                         {this.collectionOptions()}
                    </Select>
                  </div>
     

                 <SendIcon style={{ paddingRight: "45px", color: pink[200] }} onClick={(e) => this.handleSubmit(e)}/>
       
             </Grid>
         
            </FormControl>
             :  <h1>{text}</h1>
             }
                
            
       </>
      )
    }
}


export default connect(null, { addPlantToCollection })(withStyles(styles)(AddToCollection));
