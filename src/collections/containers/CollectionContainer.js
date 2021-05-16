import React from 'react';

import { connect } from 'react-redux';
import Collection from '../Collection';
import CollectionInput from '../CollectionInput';
// import { editCollection } from '../../actions/editPlant';
// import { deleteCollection} from '../../actions/deletePlant';


class CollectionContainer extends React.Component {
    
    state = {
        showEditForm: false
     }
     findCollection = () => {
        console.log(this.props.match)
        let collectionSlug = this.props.match && (this.props.match.params.slug);
        let collection = this.props.collections && (this.props.collections.find(collection => collection.slug === collectionSlug)) ;
        return collection
     }
    //  handleSubmit = (collectionData) => {
    //     const collection = this.findCollection();
    //     this.props.editCollection(collectiontData, collection.id);
    //     this.setState({
    //         showEditForm: false
    //     })
    // }

    //  deleteCollection = () => {
    //     const collection = this.findCollection();
    //     this.props.deleteCollection(collection.id);
    //     this.props.history.push("/profile/collections");
        
    //  }

  render() {
     const collection = this.findCollection();
     
    return (
      
       <div>
            <Collection collection={collection}/> 
            <button onClick={() => this.setState({showEditForm: true}) }>Edit </button>
            { this.state.showEditForm && <CollectionInput collection={collection} handleSubmit={this.handleSubmit} /> }
            {/* <button onClick={this.deleteCollection}> Delete </button> */}
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


export default connect(mapStateToProps) (CollectionContainer);
