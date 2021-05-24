import React from 'react';
import AddPlantToCollection from './AddPlantToCollection';


import { Redirect } from 'react-router';
import { Link } from 'react-router-dom';

const Collection = ( props ) => {
    if(!props.collection) return null && <Redirect to="profile/collections" />;
    const text = "No Plant has been added in Collection";
    return (
        <div>
            Collection Name: {props.collection.attributes.name} <br />
            Plants: <br /> {props.collection.attributes.plants.length > 0 ? (props.collection.attributes.plants.map(plant => 
              <>
                  <Link to={`/plants/${plant.slug}`} key={`${plant.id}` + 'collection'}>
                
                      <img src={plant.image_url} width="300" alt={plant.name}/> <br />
                      {plant.name} <br />
                    
                  </Link>
                <button onClick={() => props.deletePlantfromCollection(plant)}>Delete me</button>
              </>
                )) : text} 
            <AddPlantToCollection collection={props.collection} plants={props.plants}/>
        </div>
    )
}

export default Collection;
