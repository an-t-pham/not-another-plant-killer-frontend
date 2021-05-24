import React from 'react';
import { Link } from 'react-router-dom';
import AddToCollection from './AddToCollection';
import { connect } from 'react-redux';
import { fetchCollections } from '../actions/fetchCollections';


class Plants extends React.Component {
    componentDidMount() {
          this.props.fetchCollections(this.props.user.id)
      }
    
    render() { 
        return (
        <div>
            <ul>
                {this.props.plants.map(plant => plant && (
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
            </ul>
           
        </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        collections: state.collections
    }
}
export default connect(mapStateToProps, { fetchCollections }) (Plants);