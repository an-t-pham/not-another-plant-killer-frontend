import React from 'react';

class App extends React.Component {
  componentDidMount() {
    fetch('http://localhost:3000/api/v1/plants')
    .then(resp => resp.json())
    .then(r => console.log(r.data[0].attributes.light.ideal_location))
  }
  render() {
    return (
    <div className="App">
     App
    </div>
    );
  }
}

export default App;
