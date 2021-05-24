import React from 'react';
import { connect } from 'react-redux';
import { addPlantToCollection } from '../actions/addPlantToCollection';

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
    }
  
    render() {
        const plantOptions = this.props.plants && this.state.availablePlants.map(plant => (
            <option name={plant.attributes.name} value={plant.id} key={`${plant.id}` + 'new'}>{plant.attributes.name}</option>
         ))
      return (
        <form onSubmit={this.handleSubmit}>
          <label>
            Add a Plant:
            <select value={this.state.plantId} onChange={this.handleChange}>
            <option value="">Select a Plant</option>
                {plantOptions}
            </select>
          </label>
        

          <input type="submit" value="Submit" />
        </form>
      );
    }
}

const mapStateToProps = state => {
    return {
        plants: state.plants,
        user: state.user
    }
}

export default connect(mapStateToProps, { addPlantToCollection })(AddPlantToCollection);
