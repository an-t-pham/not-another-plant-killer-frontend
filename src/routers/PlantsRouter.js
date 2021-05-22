import React from 'react';
import { Route, Switch } from 'react-router-dom';
import PlantsContainer from '../plants/containers/PlantsContainer';
import PlantContainer from '../plants/containers/PlantContainer';





 class PlantsRouter extends React.Component {

    render() {
        return (
           <div>
                <Switch>
                <Route exact path="/plants" render={() =><PlantsContainer /> } />
                <Route path="/plants/:slug"  render={(routerProps) =><PlantContainer {...routerProps}/> }/>
                </Switch>
           </div>
        )
    }
}


export default PlantsRouter