import React from 'react';
import { connect } from 'react-redux';
import { fetchPlants } from './actions/fetchPlants';

class App extends React.Component {
  // componentDidMount() {
  //   this.props.fetchPlants({type: 'FETCH_PLANT', payload: {name: 'testing'}})
  // }
  render() {
    return (
    <div className="App">
     App
    </div>
    );
  }
}

export default connect(null, {fetchPlants})(App);
