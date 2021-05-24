import React from 'react';
import { Link } from 'react-router-dom';
import AddToCollection from './AddToCollection';
import { connect } from 'react-redux';
import { fetchCollections } from '../actions/fetchCollections';
import { fetchPlants } from '../actions/fetchPlants';


class Plants extends React.Component {
    componentDidMount() {
          this.props.fetchCollections(this.props.user.id);
          this.props.fetchPlants();
    }

    renderPlant = (plants) => {
       return plants.map(plant => plant && (
            <>
              <Link to={`/plants/${plant.attributes.slug}`} key={plant.id}>
                  <li>
                      <img src={plant.attributes.image_url} width="300" alt={plant.attributes.name}/> <br />
                      {plant.attributes.formatted_name}
                  </li>
              </Link>
              {this.props.collections.length > 0 && <AddToCollection plant={plant} collections={this.props.collections}/>}
            </>
              ))
    }
    
    render() { 
        console.log(this.props.plants)
        return (
        <div>
            <ul>
                {this.renderPlant(this.props.plants)} 
            </ul>
           
        </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        collections: state.collections,
        plants: state.plants
    }
}
export default connect(mapStateToProps, { fetchCollections, fetchPlants }) (Plants);