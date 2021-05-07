import React from 'react';

import { Route, Switch} from 'react-router-dom';


import { withAuthenticationRequired } from '@auth0/auth0-react';


import LoginButton from './components/LoginButton';
import UserPlants from './plant/UserPlants';
import Profile from './components/Profile';
import PlantsContainer from './containers/PlantsContainer';
import Collections from './collection/Collections';
import Collection from './collection/Collection';
import PlantInput from './plant/PlantInput';


  const ProtectedRoute = ({ component, ...args }) => (
  <Route component={withAuthenticationRequired(component)} {...args} />
);

class App extends React.Component {
 
  render() {
    return (
      <div className="App">
         <Switch>
            <Route exact path="/" render={() => <div> <LoginButton /> </div> }/> 
            <ProtectedRoute path="/plants" component={PlantsContainer} />
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
