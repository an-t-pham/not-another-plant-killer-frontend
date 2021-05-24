import React from 'react';

import { connect } from 'react-redux';
import Collection from '../Collection';
import CollectionInput from '../CollectionInput';

import { deleteCollection } from '../../actions/deleteCollection';
import { fetchCollections } from '../../actions/fetchCollections';
import { editCollection } from '../../actions/editCollection';
import { deletePlantfromCollection } from '../../actions/deletePlantfromCollection';


class CollectionContainer extends React.Component {

     componentDidUpdate() {
       if (this.props.user && this.props.collections.length === 0) {
         return this.props.fetchCollections(this.props.user.id)
       } 
     }

    
    state = {
        showEditForm: false
    }


    findCollection = () => {
      let collectionSlug = this.props.match && (this.props.match.params.slug);
      let collection = this.props.collections && (this.props.collections.find(collection => collection.attributes.slug === collectionSlug)) ;
      return collection
    }

     handleSubmit = (collectionData) => {
        const collection = this.findCollection();
        this.props.user && (this.props.editCollection(this.props.user.id, collection.id, collectionData));
        this.props.history.push("/profile/collections");
        this.setState({
            showEditForm: false
        })
    }

     deleteCollection = () => {
        const collection = this.findCollection();
        this.props.deleteCollection(this.props.user.id, collection.id);
        this.props.history.push("/profile/collections");
     }

     deletePlantfromCollection = (plantData) => {
       const collection = this.findCollection();
       this.props.user && (this.props.deletePlantfromCollection(this.props.user.id, collection.id, plantData));
     }

  render() {
     const collection = this.findCollection();

    return (
      
       <div>
            <Collection collection={collection} plants={this.props.plants} deletePlantfromCollection={this.deletePlantfromCollection}/>
            <button onClick={() => this.setState({showEditForm: true}) }>Edit Collection</button>
            { this.state.showEditForm && <CollectionInput collection={collection} handleSubmit={this.handleSubmit} /> }
            <button onClick={this.deleteCollection}> Delete Collection</button>
       </div>
    )
  }

}

const mapStateToProps = state => {
    return {
        collections: state.collections,
        user: state.user,
        plants: state.plants
    }
}


export default connect(mapStateToProps, { fetchCollections, editCollection, deleteCollection, deletePlantfromCollection }) (CollectionContainer);
