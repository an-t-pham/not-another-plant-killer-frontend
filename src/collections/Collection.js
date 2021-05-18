import React from 'react';
import AddPlantToCollection from './AddPlantToCollection';


import { Redirect } from 'react-router';
import { Link } from 'react-router-dom';

const Collection = ( {collection} ) => {
    if(!collection) return null && <Redirect to="profile/collections" />;
    const text = "No Plant has been added in Collection";
    return (
        <div>
            Collection Name: {collection.attributes.name} <br />
            Plants: <br /> {collection.attributes.plants.length > 0 ? (collection.attributes.plants.map(plant => 
                  <Link to={`/plants/${plant.slug}`} key={`${plant.id}` + `${collection.id}`}>
                
                      <img src={plant.image_url} width="300" alt={plant.name}/> <br />
                      {plant.name} <br />
              
              </Link>
                )) : text} 
            <AddPlantToCollection collection={collection}/>
        </div>
    )
}

export default Collection;
