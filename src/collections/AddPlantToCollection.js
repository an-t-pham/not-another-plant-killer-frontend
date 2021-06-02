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
import teal from '@material-ui/core/colors/teal';

const styles = {
    formControl: {
        width: "100%"
        
      },
      select: {
          width: 200
      },
 };

class AddPlantToCollection extends React.Component {
    state = {
        plantId: this.props.plants[0].id,
        availablePlants: []
    };
    
    componentDidMount() {
        this.setState({
            availablePlants: this.props.plants.filter(p => !this.props.collection.attributes.plants.some(pc => pc.id === p.id))
        })
    };
  
    handleChange = event => {
      this.setState({
          plantId: event.target.value
        });
    }
  
    handleSubmit = event => {
      event.preventDefault();
      const thePlant = this.props.plants.find(plant => plant.id === this.state.plantId);
      this.props.addPlantToCollection(this.props.user.id, this.props.collection.id, thePlant);
      this.setState({
        plantId: this.props.plants[0].id,
        availablePlants: this.state.availablePlants.filter(p => p.id !== thePlant.id)
      });
      this.props.handleClose();
    }
  
    render() {
        const { classes } = this.props;
        const plantOptions = this.props.plants && this.state.availablePlants.map(plant => (
            <MenuItem name={plant.attributes.name} value={plant.id} key={`${plant.id}` + 'new'} style={{ color: pink[200] }}>{plant.attributes.name}</MenuItem>
         ))

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
                   value={this.state.plantId}
                   onChange={this.handleChange}
                   autoWidth
                   label="Add a Plant"
                   >  
                     <MenuItem value="" style={{ color: pink[200] }} >
                       <em>Select a Plant</em>
                     </MenuItem>
                       {plantOptions}
                  </Select>
                </div>
            
            
               <SendIcon style={{ paddingRight: "45px", color: pink[200] }} onClick={(e) => this.handleSubmit(e)}/>
            
            </Grid>
            
            </form>

         )

    }
}



const mapStateToProps = state => {
    return {
        user: state.user
    }
}

export default connect(mapStateToProps, { addPlantToCollection })(withStyles(styles)(AddPlantToCollection));
