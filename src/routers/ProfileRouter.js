import React from 'react';
import { Route, Switch } from 'react-router-dom';
import CollectionContainer from '../collections/containers/CollectionContainer';
import CollectionsContainer from '../collections/containers/CollectionsContainer';
import Profile from '../components/Profile';

export default class ProfileRouter extends React.Component {
    render() {
        return (
           <div>
               <Switch>
                 <Route exact path="/profile" component={Profile} />
                 <Route path="/profile/collections" render={() =><CollectionsContainer /> } />
                 <Route path="/profile/collections/:slug"  render={(routerProps) =><CollectionContainer {...routerProps}/> }/>
               </Switch>
           </div>
        )
    }
}