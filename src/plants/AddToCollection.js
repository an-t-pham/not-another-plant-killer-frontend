import React from 'react';
import { connect } from 'react-redux';
import { addPlantToCollection } from '../actions/addPlantToCollection';

class AddToCollection extends React.Component {
    state = {
        collectionId: ""
    };
    
  
    handleChange = event => {
        console.log(event.target.value)
      this.setState({
          collectionId: event.target.value
        });
    }
  
    handleSubmit = event => {
      event.preventDefault();
      const collection = this.props.collections.find(collection => collection.id === this.state.collectionId);
      this.props.addPlantToCollection(collection.attributes.user_id, collection.id, this.props.plant);
      this.setState({
        collectionId: this.props.collections[0].id
      });
    }
    
    collectionOptions = () => {
        console.log(this.props.collections)
            return this.props.collections && this.props.collections.map(collection => (
                <option name={collection.attributes.name} value={collection.id} key={`${collection.id}` + 'new'}>{collection.attributes.name}</option>
             ))
    }

  
    render() {
        
      return (
        <> 
          {  (this.props.collections.length > 0) ? 
                <form onSubmit={this.handleSubmit}>
                  <label>
                    Add To Collection:
                    <select value={this.state.collectionId} onChange={this.handleChange}>
                    <option value="">Select a Collection</option>
                        {this.collectionOptions()}
                    </select>
                  </label>
      
                  <input type="submit" value="Submit" />
                </form>  
             :  "No Collection has been created" 
            }
       </>
      )
    }
}


export default connect(null, { addPlantToCollection })(AddToCollection);
