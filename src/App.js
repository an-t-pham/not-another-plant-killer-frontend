import React from 'react';
import { connect } from 'react-redux';
import { fetchPlants } from './actions/fetchPlants';
import CollectionsContainer from './containers/CollectionsContainer';
import PlantsContainer from './containers/PlantsContainer';
import UsersContainer from './containers/UsersContainer';

class App extends React.Component {
  // componentDidMount() {
  //   this.props.fetchPlants({type: 'FETCH_PLANT', payload: {name: 'testing'}})
  // }
  render() {
    return (
    <div className="App">
      <PlantsContainer />
      <CollectionsContainer />
      <UsersContainer />
    </div>
    );
  }
}

export default connect(null, {fetchPlants})(App);
