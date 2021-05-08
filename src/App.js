import React from 'react';

import { Route, Switch} from 'react-router-dom';


import {  withAuthenticationRequired } from '@auth0/auth0-react';


import LoginButton from './components/LoginButton';
import UserPlants from './plants/UserPlants';
import Profile from './components/Profile';
import Collections from './collection/Collections';
import Collection from './collection/Collection';
import PlantInput from './plants/PlantInput';
import { NavBar } from './components/NavBar';
import PlantsRouter from './routers/PlantsRouter';


  const ProtectedRoute = ({ component, ...args }) => (
  <Route component={withAuthenticationRequired(component)} {...args} />
);

class App extends React.Component {
 
  render() {
    return (
      <div className="App">
        <NavBar />
         <Switch>
            <Route exact path="/" render={() => <div> <LoginButton /> </div> }/> 
            <ProtectedRoute path="/plants" component={PlantsRouter} />
            <ProtectedRoute exact path="/profile" component={Profile} />
            <ProtectedRoute exact path="/profile/garden" component={UserPlants} />
            <ProtectedRoute exact path="/profile/collections" component={Collections} />
            <ProtectedRoute exact path="/profile/collection/:id" component={Collection} />
         </Switch>
    </div>
    );
  }
}

export default App;
