import React from 'react';

import { connect } from 'react-redux';
import Plant from '../Plant';
import PlantInput from '../PlantInput';
import { editPlant } from '../../actions/editPlant';
import { deletePlant } from '../../actions/deletePlant';

import Modal from '@material-ui/core/Modal';
import FabButton from '../../components/FabButton';


class PlantContainer extends React.Component {
    
    state = {
        showEditForm: false
    }


    handleOpen = () => {
      this.setState({
        showForm: true
      })
    }

   handleClose = () => {
      this.setState({
        showForm: false
      })
   }
     
    findPlant = () => {
      let plantSlug = this.props.match && (this.props.match.params.slug);
      let plant = this.props.plants && (this.props.plants.find(plant => plant.attributes.slug === plantSlug)) ;
      return plant
    }

     handleSubmit = (plantData) => {
        const plant = this.findPlant();
        this.props.editPlant(plantData, plant.id);
        this.props.history.push("/plants");
        this.handleClose();
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
            
            <div style={{position: 'fixed', top: '50px', right: '20px'}}><FabButton title="Edit Plant" button="edit" handleAction={this.handleOpen} /> </div>
            <Modal
              open={this.state.showForm}
              onClose={this.handleClose}
            >
                <PlantInput plant={plant} handleSubmit={this.handleSubmit} /> 
            </Modal> 
            <div style={{position: 'fixed', top: '120px', right: '20px'}}><FabButton title="Delete Plant" button="delete" right="40px" handleAction={this.deletePlant} /></div>
            
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
