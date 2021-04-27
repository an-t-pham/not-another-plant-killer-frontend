import React from 'react';
import { connect } from 'react-redux';
import { fetchPlants } from './actions/fetchPlants';
import LoginButton from './components/LoginButton';
import CollectionsContainer from './containers/CollectionsContainer';
import PlantsContainer from './containers/PlantsContainer';
import UsersContainer from './containers/UsersContainer';

import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
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
          <NavBar />
          <Route exact path="/" render={() => <div>Home</div>} />
          <Route path='/plants' render={() => <PlantsContainer/>} />
          <LoginButton />
          <LogoutButton />
        </div>
      </Router>
      
    </div>
    );
  }
}

export default connect(null, {fetchPlants})(App);
