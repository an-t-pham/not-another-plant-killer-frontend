import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';

import Plants from '../Plants';
import { addPlant } from '../../actions/addPlant';
import PlantInput from '../PlantInput';
import { fetchLights } from '../../actions/fetchLights';
import { fetchWaters } from '../../actions/fetchWaters';

import CircularProgress from '@material-ui/core/CircularProgress';
import Modal from '@material-ui/core/Modal';

import FabButton from '../../components/FabButton';
import pink from '@material-ui/core/colors/pink';

import useForm from '../../hooks/useForm';

const useStyles = makeStyles({
  circle: {
    position: 'absolute',
    top: '50%',
    left: '50%'
  }
});

const PlantsContainer = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { handleClose, open } = useForm();
  useEffect(() => {
     dispatch(fetchLights());
     dispatch(fetchWaters())
  }, [dispatch]);

  const user = useSelector(state => state.user)
  const errors = useSelector(state => state.errors)

 
  const handleSubmit = (plantData) => {
    dispatch(addPlant(plantData));
    handleClose();
  }
    return (
       <div>
          { 
            !user ? <CircularProgress style={{color: pink[200]}} className={classes.circle} /> : (
              <>
                 <Plants user={user}/> 
                 <div style={{position: 'fixed', top: '50px', right: '20px'}}><FabButton title="Create New Plant" button="add" /></div>
                 
                  <Modal
                   open={open}
                   onClose={handleClose}
                   style={{overflow:'scroll'}}
                  >
                     <PlantInput handleSubmit={handleSubmit} /> 
                  </Modal>
                 
              </>
            )
          }
            
       </div>
    )

}

export default PlantsContainer;
