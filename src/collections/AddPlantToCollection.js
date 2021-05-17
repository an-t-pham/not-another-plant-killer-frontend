import React from 'react';
import { connect } from 'react-redux';

class AddPlantToCollection extends React.Component {
    state = {
        plant: this.props.plants[0]
    };
    
  
    handleChange = event => {
        console.log(event.target)
      this.setState({
          plant: event.target.value
        });
    }
  
    handleSubmit = event => {
      event.preventDefault();
      
    }
  
    render() {
        console.log(this.props.plants)
        console.log(this.state)
      return (
        <form onSubmit={this.handleSubmit}>
          <label>
            Add a Plant:
            <select value={this.state.plant} onChange={this.handleChange}>
              {/* <option value="grapefruit">Grapefruit</option>
              <option value="lime">Lime</option>
              <option value="coconut">Coconut</option>
              <option value="mango">Mango</option> */}
                { this.props.plants && this.props.plants.map(plant => (
                   <option name={plant.attributes.name} value={plant.id}>{plant.attributes.name}</option>
                    )
                )}
            </select>
          </label>
        

          <input type="submit" value="Submit" />
        </form>
      );
    }
}

const mapStateToProps = state => {
    return {
        plants: state.plants
    }
}

export default connect(mapStateToProps)(AddPlantToCollection);
