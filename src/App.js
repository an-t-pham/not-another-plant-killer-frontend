import React, { useEffect } from 'react';

import { Route, Switch} from 'react-router-dom';


import {  withAuthenticationRequired, useAuth0 } from '@auth0/auth0-react';


import ProfileRouter from './routers/ProfileRouter';
import { NavBar } from './components/NavBar';
import PlantsRouter from './routers/PlantsRouter';
import { connect, useDispatch } from 'react-redux';
import { fetchUser } from './actions/fetchUser';
import { fetchPlants } from './actions/fetchPlants';
import Messages from './components/Messages';

import HomePage from './components/HomePage';


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
     }, [user, dispatch])

      return <Route component={withAuthenticationRequired(props.component)} {...props} />
    }

   
class App extends React.Component {
  
  componentDidMount() {
    this.props.fetchPlants()
  }

  render() {
    return (
      <div className="App">
        
        <NavBar />
        
         <Switch>
            <Route exact path="/" component={HomePage}/> 
           
            <ProtectedRoute path="/plants" component={PlantsRouter} />
            <ProtectedRoute path="/profile" component={ProfileRouter} />
         </Switch>
        
         <Messages messages={this.props.messages}/>
    </div>
    );
  }
}

const mapStateToProps = state => {
  return {
      plants: state.plants, 
      messages: {
        errors: state.messages.errors,
        success: state.messages.success   
      } 
  }
}

export default connect(mapStateToProps, { fetchPlants })(App);
