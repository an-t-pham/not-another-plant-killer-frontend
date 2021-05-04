import React from 'react';
import PlantInput from '../components/PlantInput';
import Plants from '../components/Plants';
import { connect } from 'react-redux';
import { fetchPlants } from '../actions/fetchPlants';


 class PlantsContainer extends React.Component {
   
    componentDidMount() {
        this.props.fetchPlants()
    }
    
    render() {
        return (
           <div>
               <PlantInput /><br /> <br />
               <Plants plants={this.props.plants}/>
           </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        plants: state.plants
    }
}

export default connect(mapStateToProps, { fetchPlants })(PlantsContainer)