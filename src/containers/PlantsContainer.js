import React from 'react';
import PlantInput from '../components/PlantInput';
import Plants from '../components/Plants';
import { connect } from 'react-redux';
import { fetchPlants } from '../actions/fetchPlants';
import { fetchLights } from '../actions/fetchLights';


 class PlantsContainer extends React.Component {
   
    componentDidMount() {
        this.props.fetchPlants()
        this.props.fetchLights()
    }
    
    render() {
        return (
           <div>
               <PlantInput lights={this.props.lights}/><br /> <br />
               <Plants plants={this.props.plants}/>
           </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        plants: state.plants,
        lights: state.lights
    }
}

export default connect(mapStateToProps, { fetchPlants, fetchLights })(PlantsContainer)