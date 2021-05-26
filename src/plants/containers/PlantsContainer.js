import React from 'react';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/styles';

import Plants from '../Plants';
import { addPlant } from '../../actions/addPlant';
import PlantInput from '../PlantInput';

import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';
import Tooltip from '@material-ui/core/Tooltip';
import CircularProgress from '@material-ui/core/CircularProgress';
import Modal from '@material-ui/core/Modal';

const styles = {
  root: {
    position: 'fixed',
    top: '50px',
    right: '100px'
  },

  circle: {
    position: 'absolute',
    top: '50%',
    left: '50%'
  }
};

class PlantsContainer extends React.Component {

  state = {
    showForm: false
 }
 
 
   handleSubmit = (plantData) => {
    this.props.addPlant(plantData);
    this.setState({
      showForm: false
    })
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

  render() {
    const { classes } = this.props

    return (
       <div>
          { 
            !this.props.user ? <CircularProgress color="secondary" className={classes.circle} /> : (
              <>
                 <Plants user={this.props.user}/> 
                 <Tooltip title="Add New Plant" aria-label="add">
                   <Fab  color="secondary" className={classes.root}>
                    <AddIcon onClick={this.handleOpen} />
                   </Fab>
                 </Tooltip>
                 
                <Modal
                 open={this.state.showForm}
                 onClose={this.handleClose}
                >
                   <PlantInput handleSubmit={this.handleSubmit} /> 
                 </Modal>
                 
              </>
            )
          }
            
       </div>
    )
  }

}

const mapStateToProps = state => {
    return {
        user: state.user
    }
}

export default connect(mapStateToProps, { addPlant })(withStyles(styles)(PlantsContainer));
