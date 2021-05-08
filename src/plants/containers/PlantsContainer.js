import React from 'react';
import { fetchPlants } from '../../actions/fetchPlants';
import { connect } from 'react-redux';

import Plants from '../Plants';



class PlantsContainer extends React.Component {

   componentDidMount() {
     this.props.fetchPlants()
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

// const mapDispatchToProps = dispatch => {
//     return {
//         plants: () => dispatch({ type: 'FETCH_PLANTS', })
//     }
// }

export default connect(mapStateToProps, { fetchPlants })(PlantsContainer)
