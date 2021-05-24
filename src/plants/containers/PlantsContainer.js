import React from 'react';
import { connect } from 'react-redux';

import Plants from '../Plants';
import { addPlant } from '../../actions/addPlant';
import PlantInput from '../PlantInput';



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

  render() {
    return (
       <div>
          { 
            !this.props.user ? <h1>loading...</h1> : (
              <>
                 <Plants user={this.props.user}/> 
                 <button onClick={() => this.setState({showForm: true}) }>Add a Plant </button>
                 { this.state.showForm && <PlantInput handleSubmit={this.handleSubmit} /> }
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

export default connect(mapStateToProps, { addPlant })(PlantsContainer);
