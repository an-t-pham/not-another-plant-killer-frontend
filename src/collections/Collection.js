import React from 'react';
import AddPlantToCollection from './AddPlantToCollection';


import { Redirect } from 'react-router';
import { Link } from 'react-router-dom';

const Collection = ( {collection} ) => {
    if(!collection) return null && <Redirect to="profile/collections" />;
    return (
        <div>
            Name: {collection.name}
            Plants: {collection.plants && collection.plants.map(plant => 
                  <Link to={`/plants/${plant.attributes.slug}`} key={plant.id}>
                  <li>
                      <img src={plant.attributes.image_url} width="300" alt={plant.attributes.name}/> <br />
                      {plant.attributes.formatted_name}
                  </li>
              </Link>
                )}
            <AddPlantToCollection collection={collection}/>
        </div>
    )
}

export default Collection;

{/* <ul>
                {plants.map(plant => plant && (
                    <Link to={`/plants/${plant.attributes.slug}`} key={plant.id}>
                        <li>
                            <img src={plant.attributes.image_url} width="300" alt={plant.attributes.name}/> <br />
                            {plant.attributes.formatted_name}
                        </li>
                    </Link>))
                } 
            </ul> */}