import React from 'react';
import { fetchPlants } from '../../actions/fetchPlants';
import { connect } from 'react-redux';

import Plants from '../Plants';
import { addPlant } from '../../actions/addPlant';


class PlantsContainer extends React.Component {

  state = {
    showForm: false
 }

   componentDidMount() {
     this.props.fetchPlants()
   }
 
   handleSubmit = (plantData) => {
  
    this.props.addPlant(plantData, plant.id);
    this.setState({
        showForm: false
    })
}
  render() {
    
    return (
       <div>
            <Plants plants={this.props.plants} /> 
       </div>
    )
  }

}

const mapStateToProps = state => {
    return {
        plants: state.plants,
        
    }
}

export default connect(mapStateToProps, { fetchPlants, addPlant })(PlantsContainer)
