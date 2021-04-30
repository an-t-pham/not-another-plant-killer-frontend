import React from 'react';
import PlantInput from '../components/PlantInput';
import Plants from '../components/Plants';
import { connect } from 'react-redux';


 class PlantsContainer extends React.Component {
    render() {
        return (
           <div>
               <PlantInput />
               <Plants />
           </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        plants: state.plants
    }
}

export default connect(mapStateToProps)(PlantsContainer)