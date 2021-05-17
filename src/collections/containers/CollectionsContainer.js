import React from 'react';
import { connect } from 'react-redux';

import { fetchCollections } from '../../actions/fetchCollections';
import Collections from '../Collections';
import { addCollection } from '../../actions/addCollection';
import CollectionInput from '../CollectionInput';



class CollectionsContainer extends React.Component {

  state = {
    showCForm: false
  }

  componentDidMount() {
     this.props.user && (this.props.fetchCollections(this.props.user.id))
  }

  componentDidUpdate(prevProps) {
    if (prevProps.user === null) {
      this.props.fetchCollections(this.props.user.id)
    }
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

export default connect(mapStateToProps, { addCollection, fetchCollections })(CollectionsContainer)