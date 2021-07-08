import React from 'react';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/styles';

import Plants from '../Plants';
import { addPlant } from '../../actions/addPlant';
import PlantInput from '../PlantInput';
import { fetchLights } from '../../actions/fetchLights';
import { fetchWaters } from '../../actions/fetchWaters';

import CircularProgress from '@material-ui/core/CircularProgress';
import Modal from '@material-ui/core/Modal';

import FabButton from '../../components/FabButton';
import pink from '@material-ui/core/colors/pink';

const styles = {
  circle: {
    position: 'absolute',
    top: '50%',
    left: '50%'
  },
  modal: {
    overflow:'scroll'
  }
};

// class PlantsContainer extends React.Component {
const PlantsContainer = () => {
  componentDidMount() { 
    this.props.fetchLights()
    this.props.fetchWaters()
}

  state = {
    showForm: false
 }
 
 
   handleSubmit = (plantData) => {
    this.props.addPlant(plantData);
    this.handleClose();
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

  // render() {
    const { classes } = this.props

    return (
       <div>
          { 
            !this.props.user ? <CircularProgress style={{color: pink[200]}} className={classes.circle} /> : (
              <>
                 <Plants user={this.props.user}/> 
                 <div style={{position: 'fixed', top: '50px', right: '20px'}}><FabButton title="Create New Plant" button="add" handleAction={this.handleOpen} /></div>
                 
                  <Modal
                   open={this.state.showForm}
                   onClose={this.handleClose}
                   style={{overflow:'scroll'}}
                  >
                     <PlantInput handleSubmit={this.handleSubmit} /> 
                  </Modal>
                 
              </>
            )
          }
            
       </div>
    )
  // }

}

// const mapStateToProps = state => {
//     return {
//         user: state.user,
//         errors: state.errors
//     }
// }

export default connect(mapStateToProps, { addPlant, fetchWaters, fetchLights })(withStyles(styles)(PlantsContainer));
