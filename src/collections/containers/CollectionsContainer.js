import React from 'react';
// import { fetchPlants } from '../../actions/fetchPlants';
// import { connect } from 'react-redux';

import Collections from '../Collections';
// import { addPlant } from '../../actions/addPlant';
import CollectionInput from '../CollectionInput';


class PlantsContainer extends React.Component {

  state = {
    showForm: false
 }

   componentDidMount() {
     this.props.fetchCollections()
   }
 
   handleSubmit = (collectionData) => {
    this.props.addCollection(collectionData);
    this.setState({
        showForm: false
    })
}
  render() {
    
    return (
       <div>
            <Collections collections={this.props.collections} /> 
            <button onClick={() => this.setState({showForm: true}) }>Create new Collection </button>
            { this.state.showForm && <CollectionInput handleSubmit={this.handleSubmit} /> }
       </div>
    )
  }

}

const mapStateToProps = state => {
    return {
        collections: state.collections,
        
    }
}

export default connect(mapStateToProps, { fetchCollections, addCollection })(PlantsContainer)