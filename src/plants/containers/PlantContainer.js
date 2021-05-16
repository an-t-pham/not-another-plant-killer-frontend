import React from 'react';

import { connect } from 'react-redux';
import Plant from '../Plant';
import PlantInput from '../PlantInput';
import { editPlant } from '../../actions/editPlant';
import { deletePlant } from '../../actions/deletePlant';


class PlantContainer extends React.Component {
    
    state = {
        showEditForm: false
     }
     
     findPlant = () => {
        let plantSlug = this.props.match && (this.props.match.params.slug);
        let plant = this.props.plants && (this.props.plants.find(plant => plant.attributes.slug === plantSlug)) ;
        return plant
     }
     handleSubmit = (plantData) => {
        const plant = this.findPlant();
        this.props.editPlant(plantData, plant.id);
        this.setState({
            showEditForm: false
        })
    }

     deletePlant = () => {
        const plant = this.findPlant();
        this.props.deletePlant(plant.id);
        this.props.history.push("/plants");
        
     }

  render() {
     const plant = this.findPlant();
    return (
     
       <div>
            <Plant plant={plant}/> 
            <button onClick={() => this.setState({showEditForm: true}) }>Edit </button>
            { this.state.showEditForm && <PlantInput plant={plant} handleSubmit={this.handleSubmit} /> }
            <button onClick={this.deletePlant}> Delete </button>
       </div>
    )
  }

}

const mapStateToProps = state => {
    return {
        plants: state.plants,
    }
}


export default connect(mapStateToProps, { editPlant, deletePlant }) (PlantContainer);
