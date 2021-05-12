import React from 'react';
import { Route, Switch } from 'react-router-dom';
import PlantsContainer from '../plants/containers/PlantsContainer';
import PlantContainer from '../plants/containers/PlantContainer';
import UserPlants from '../plants/UserPlants';




 class PlantsRouter extends React.Component {

    render() {
        return (
           <div>
                <Switch>
                <Route exact path="/plants" render={() =><PlantsContainer plants={this.props.plants} /> } />
                <Route path="/plants/:slug"  render={(routerProps) =><PlantContainer {...routerProps}/> }/>
                <Route path="/plants/your-garden" render={() => <UserPlants/> }/>
                </Switch>
           </div>
        )
    }
}


export default PlantsRouter