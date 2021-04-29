import React from 'react';
import { connect } from 'react-redux';
import { fetchPlants } from './actions/fetchPlants';
import LoginButton from './components/LoginButton';
import CollectionsContainer from './containers/CollectionsContainer';
import PlantsContainer from './containers/PlantsContainer';
import UsersContainer from './containers/UsersContainer';

import { Router, Route, Switch} from 'react-router-dom';
import { Auth0Provider, withAuthenticationRequired } from '@auth0/auth0-react';
import { createBrowserHistory } from 'history';
import NavBar from './components/NavBar';
import LogoutButton from './components/LogoutButton';

class App extends React.Component {
  // componentDidMount() {
  //   this.props.fetchPlants({type: 'FETCH_PLANT', payload: {name: 'testing'}})
  // }
  render() {
    return (
    <div className="App">
      {/* <PlantsContainer />
      <CollectionsContainer />
      <UsersContainer /> */}
      

      <Router>
        <div>
         
          {/* <Route>exact path="/" render={() => (
                    <div>
                      <LoginButton />
                    </div>     
                )
             }     
          } </Route> 
          <Route path='/plants' render={() => <PlantsContainer/>} />
          
          <LogoutButton />
        </div> */}

        <div>
        <NavBar />
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/topics">Topics</Link>
          </li>
        </ul>

        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/topics">
            <Topics />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
      </Router>
      
    </div>
    );
  }
}

export default connect(null, {fetchPlants})(App);
