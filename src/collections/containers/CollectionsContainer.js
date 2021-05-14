import React from 'react';
// import { fetchPlants } from '../../actions/fetchPlants';
import { connect } from 'react-redux';

import Collections from '../Collections';
import { addCollection } from '../../actions/addCollection';
import CollectionInput from '../CollectionInput';


class PlantsContainer extends React.Component {

  state = {
    showCForm: false
 }
 
   handleSubmit = (collectionData) => {
    this.props.addCollection(collectionData, this.props.user.id);
    this.setState({
        showForm: false
    })
}
  render() {
    
    return (
       <div>
            <Collections collections={this.props.collections} /> 
            <button onClick={() => this.setState({showCForm: true}) }>Create new Collection </button>
            { this.state.showCForm && <CollectionInput handleSubmit={this.handleSubmit} /> }
       </div>
    )
  }

}

const mapStateToProps = state => {
    return {
        collections: state.collections,
        user: state.user
    }
}

export default connect(mapStateToProps, { addCollection })(PlantsContainer)