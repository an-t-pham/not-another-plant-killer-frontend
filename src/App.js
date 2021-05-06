import React from 'react';

import { Route, Switch} from 'react-router-dom';


import { withAuthenticationRequired } from '@auth0/auth0-react';

import NavBar from './components/NavBar';
import LoginButton from './components/LoginButton';
import UserPlants from './components/UserPlants';
import Profile from './components/Profile';
import PlantsContainer from './containers/PlantsContainer';
import Plants from './components/Plants';
import Collections from './components/Collections';
import Collection from './components/Collection';
import UsersContainer from './containers/UsersContainer';


  const ProtectedRoute = ({ component, ...args }) => (
  <Route component={withAuthenticationRequired(component)} {...args} />
);

class App extends React.Component {
 
  render() {
    return (
      <div className="App">
         <Switch>
            <Route exact path="/" render={() => <div> <NavBar /> </div> }/> 
            <Route path="/plants" render={() => <PlantsContainer />} />
            <ProtectedRoute exact path="/profile" component={Profile} />
            <ProtectedRoute exact path="/profile/plants" component={UserPlants} />
            <ProtectedRoute exact path="/profile/collections" component={Collections} />
            <ProtectedRoute exact path="/profile/collection/:id" component={Collection} />
         </Switch>
    </div>
    );
  }
}

export default App;
