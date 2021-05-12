import React from 'react';
import { Route, Switch } from 'react-router-dom';
import CollectionInput from '../collections/CollectionInput';
import Collections from '../collections/Collections';

export default class CollectionsContainer extends React.Component {
    render() {
        return (
           <div>
               <Switch>
                 <Route exact path="/plants" render={() =><PlantsContainer plants={this.props.plants} /> } />
                 <Route path="/plants/:slug"  render={(routerProps) =><PlantContainer {...routerProps}/> }/>
                 <Route path="/plants/your-garden" render={() => <UserPlants/> }/>
               </Switch>
               <CollectionInput />
               <Collections />
           </div>
        )
    }
}