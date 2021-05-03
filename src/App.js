import React from 'react';
// import { connect } from 'react-redux';



import { Router, Route, Switch} from 'react-router-dom';


import { createBrowserHistory } from 'history';

import { Auth0Provider, withAuthenticationRequired } from '@auth0/auth0-react';

import NavBar from './components/NavBar';
import LoginButton from './components/LoginButton';
import UserPlants from './components/UserPlants';
import Profile from './components/Profile';
import PlantsContainer from './containers/PlantsContainer';
import Plants from './components/Plants';
import Collections from './components/Collections';
import Collection from './components/Collection';
import UsersContainer from './containers/UsersContainer';

const history = createBrowserHistory();

  const ProtectedRoute = ({ component, ...args }) => (
  <Route component={withAuthenticationRequired(component)} {...args} />
);

  const onRedirectCallback = (appState) => {
  // Use the router's history module to replace the url
  history.replace(appState?.returnTo || window.location.pathname);
};


class App extends React.Component {
 
  render() {
    return (
      <div className="App">
        <Auth0Provider
         domain="an-tp.eu.auth0.com"
         clientId="ODD637c2s38AAswbXggHMg8CEVVbl0IQ"
         redirectUri={window.location.origin + "/profile"}
         audience="https://an-tp.eu.auth0.com/api/v2/"
         scope="read:current_user update:current_user_metadata"
         onRedirectCallback={onRedirectCallback}
        > 
 

      <Router history={history}>
         <Switch>
            <Route exact path="/" render={() => <div> <NavBar /> </div> }/> 
            <Route path="/plants" render={() => <PlantsContainer />} />
            <ProtectedRoute exact path="/profile" component={Profile} />
            <ProtectedRoute exact path="/profile/plants" component={UserPlants} />
            <ProtectedRoute exact path="/profile/collections" component={Collections} />
            <ProtectedRoute exact path="/profile/collection/:id" component={Collection} />
         </Switch>
      </Router>
      </Auth0Provider>
    </div>
    );
  }
}

export default (App);
