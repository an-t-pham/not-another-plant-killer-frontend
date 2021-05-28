import React, { useEffect } from 'react';

import { Route, Switch} from 'react-router-dom';


import {  withAuthenticationRequired, useAuth0 } from '@auth0/auth0-react';


import ProfileRouter from './routers/ProfileRouter';
import { NavBar } from './components/NavBar';
import PlantsRouter from './routers/PlantsRouter';
import { connect, useDispatch } from 'react-redux';
import { fetchUser } from './actions/fetchUser';
import { fetchPlants } from './actions/fetchPlants';


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
     }, [user])

      return <Route component={withAuthenticationRequired(props.component)} {...props} />
    }

   
class App extends React.Component {
  
  componentDidMount() {
    this.props.fetchPlants()
  }

  render() {
    return (
      <div className="App">
        {/* <Typography variant="body1"> */}
        <NavBar />
         <Switch>
            <Route exact path="/" component={HomePage}/> 
            {/* <Route exact path="/" render={() => <div> <LoginButton /> </div> }/>  */}
            <ProtectedRoute path="/plants" component={PlantsRouter} />
            <ProtectedRoute path="/profile" component={ProfileRouter} />
         </Switch>
         {/* </Typography> */}
    </div>
    );
  }
}

const mapStateToProps = state => {
  return {
      plants: state.plants,    
  }
}

export default connect(mapStateToProps, { fetchPlants })(App);
