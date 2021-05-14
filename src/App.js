import React, { useEffect } from 'react';

import { Route, Switch} from 'react-router-dom';


import {  withAuthenticationRequired, useAuth0 } from '@auth0/auth0-react';


import LoginButton from './components/LoginButton';
import UserPlants from './plants/UserPlants';
import ProfileRouter from './routers/ProfileRouter';
import Collections from './collections/Collections';
import Collection from './collections/Collection';
import { NavBar } from './components/NavBar';
import PlantsRouter from './routers/PlantsRouter';
import { connect, useDispatch } from 'react-redux';
import { fetchUser } from './actions/fetchUser';


  export const ProtectedRoute = (props) => {
    const { user } = useAuth0();
    const dispatch = useDispatch();

    useEffect(() => {
       if (user) {
         dispatch(fetchUser({
           name: user.name,
           email: user.email
          }));
        }
     }, [user])

      return <Route component={withAuthenticationRequired(props.component)} {...props} />
    }

class App extends React.Component {
  
  render() {
    return (
      <div className="App">
        <NavBar />
         <Switch>
            <Route exact path="/" render={() => <div> <LoginButton /> </div> }/> 
            <ProtectedRoute path="/plants" component={PlantsRouter} />
            <ProtectedRoute path="/profile" component={ProfileRouter} />
            {/* <ProtectedRoute exact path="/profile/garden" component={UserPlants} />
            <ProtectedRoute exact path="/profile/collections" component={Collections} />
            <ProtectedRoute exact path="/profile/collections/:id" component={Collection} /> */}
         </Switch>
    </div>
    );
  }
}

export default App;
