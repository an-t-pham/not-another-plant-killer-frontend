import React from 'react';
import PlantInput from '../components/PlantInput';
import Plants from '../components/Plants';
import { connect } from 'react-redux';
import { fetchPlants } from '../actions/fetchPlants';
import { fetchLights } from '../actions/fetchLights';
import { fetchWaters } from '../actions/fetchWaters';
import { addPlant } from '../actions/addPlant';


 class PlantsContainer extends React.Component {
   
    componentDidMount() {
        this.props.fetchPlants()
        this.props.fetchLights()
        this.props.fetchWaters()
    }
    
    render() {
        return (
           <div>
               <PlantInput lights={this.props.lights} waters={this.props.waters} addPlant={this.props.addPlant} /><br /> <br />
               <Plants plants={this.props.plants}/>
           </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        plants: state.plants,
        lights: state.lights,
        waters: state.waters
    }
}

const mapDispatchToProps = dispatch => {
    return {
        plants: () => dispatch({ type: 'FETCH_PLANTS', })
    }
}

export default connect(mapStateToProps, { fetchPlants, fetchLights, fetchWaters, addPlant })(PlantsContainer)