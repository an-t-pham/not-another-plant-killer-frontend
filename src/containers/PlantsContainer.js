import React from 'react';
import PlantInput from '../plant/PlantInput';
import Plants from '../plant/Plants';
import { connect } from 'react-redux';
import { fetchPlants } from '../actions/fetchPlants';
import { fetchLights } from '../actions/fetchLights';
import { fetchWaters } from '../actions/fetchWaters';
import { addPlant } from '../actions/addPlant';
import { NavBar } from '../components/NavBar';

import { Route, Switch} from 'react-router-dom';


 class PlantsContainer extends React.Component {
   
    componentDidMount() {
        this.props.fetchPlants()
        this.props.fetchLights()
        this.props.fetchWaters()
    }
    
    render() {
        return (
           <div>
                <Switch>
               {/* 
               <NavBar />
               <Plants plants={this.props.plants} />
               <PlantInput lights={this.props.lights} waters={this.props.waters} addPlant={this.props.addPlant} /> */}
                <Route exact path="/plants" render={() =><Plants plants={this.props.plants} /> } />
                <Route exact path="/plants/new" render={() =><PlantInput lights={this.props.lights} waters={this.props.waters} addPlant={this.props.addPlant} /> }/>
                </Switch>
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

// const mapDispatchToProps = dispatch => {
//     return {
//         plants: () => dispatch({ type: 'FETCH_PLANTS', })
//     }
// }

export default connect(mapStateToProps, { fetchPlants, fetchLights, fetchWaters, addPlant })(PlantsContainer)