import React from 'react';
import PlantInput from '../plants/PlantInput';
import PlantsContainer from '../plants/PlantsContainer';
import { connect } from 'react-redux';
import { fetchPlants } from '../actions/fetchPlants';
import { fetchLights } from '../actions/fetchLights';
import { fetchWaters } from '../actions/fetchWaters';
import { addPlant } from '../actions/addPlant';


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
                <Route exact path="/plants" render={() =><PlantsContainer plants={this.props.plants} /> } />
                <Route path="/plants/:id" render={() => <Plant />}/>
                <Route  path="/plants/new" render={() =><PlantInput lights={this.props.lights} waters={this.props.waters} addPlant={this.props.addPlant} /> }/>
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