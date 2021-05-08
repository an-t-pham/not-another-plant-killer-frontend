import React from 'react';
import { Route, Switch} from 'react-router-dom';
import PlantsContainer from '../plants/containers/PlantsContainer';
import PlantContainer from '../plants/containers/PlantContainer';
import UserPlants from '../plants/UserPlants';
import PlantInput from '../plants/PlantInput';


 class PlantsRouter extends React.Component {

    render() {
        return (
           <div>
                <Switch>
                <Route exact path="/plants" render={() =><PlantsContainer plants={this.props.plants} /> } />
                <Route path="/plants/:slug" component={PlantContainer} />
                <Route  path="/plants/new" render={() =><PlantInput /> }/>
                <Route path="/plants/your-garden" render={() => <UserPlants/> }/>
                </Switch>
           </div>
        )
    }
}


export default PlantsRouter