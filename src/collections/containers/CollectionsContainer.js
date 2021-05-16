import React from 'react';
import { connect } from 'react-redux';

import Collections from '../Collections';
import { addCollection } from '../../actions/addCollection';
import CollectionInput from '../CollectionInput';


class CollectionsContainer extends React.Component {

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

export default connect(mapStateToProps, { addCollection })(CollectionsContainer)