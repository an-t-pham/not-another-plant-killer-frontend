import React, { useMemo } from 'react';

import { useSelector, useDispatch } from 'react-redux';
import Plant from '../Plant';
import PlantInput from '../PlantInput';
import { editPlant } from '../../actions/editPlant';
import { deletePlant } from '../../actions/deletePlant';


import Modal from '@material-ui/core/Modal';
import FabButton from '../../components/FabButton';

import useForm from '../../hooks/useForm';

// class PlantContainer extends React.Component {
const PlantContainer = ( { match, history }) => {
  //   state = {
  //       showEditForm: false
  //   }


  //   handleOpen = () => {
  //     this.setState({
  //       showEditForm: true
  //     })
  //   }

  //  handleClose = () => {
  //     this.setState({
  //       showEditForm: false
  //     })
  //  }
   const { handleClose, open } = useForm();
   const dispatch = useDispatch();
   const plants = useSelector(state => state.plants)
   const plant = useMemo(() => {
      let plantSlug = match && (match.params.slug);
      return this.props.plants && (this.props.plants.find(plant => plant.attributes.slug === plantSlug)) ;
    }, [match, plants])

   const handleSubmit = (plantData) => {
       dispatch(editPlant(plantData, plant.id));
       history.push("/plants");
       handleClose();
    }

    const deleteThePlant = () => {
        dispatch(deletePlant(plant.id));
        history.push("/plants");
     }

     

    return (
     
       <div>
            <Plant plant={plant}/> 
            
            <div style={{position: 'fixed', top: '50px', right: '20px'}}><FabButton title="Edit Plant" button="edit"/> </div>
            <Modal
              open={open}
              onClose={handleClose}
            >
                <PlantInput plant={plant} handleSubmit={handleSubmit} /> 
            </Modal> 
            <div style={{position: 'fixed', top: '120px', right: '20px'}}><FabButton title="Delete Plant" button="delete" right="40px" handleAction={deletePlant} /></div>
            
       </div>
    )
 

}

export default PlantContainer;
