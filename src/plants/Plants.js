import React from 'react';
import { Link } from 'react-router-dom';
import PlantInput from './PlantInput';

const Plants = ( {plants} ) => {
    return (
        <div>
            <ul>
                {plants.map(plant => (
                    <Link to={`/plants/${plant.attributes.slug}`} key={plant.id}>
                        <li>
                            <img src={plant.attributes.image_url} width="300" alt={plant.attributes.name}/> <br />
                            {plant.attributes.name}
                        </li>
                    </Link>))
                } 
            </ul>
            <h3>Add a new plant</h3>
            <PlantInput />
        </div>
    )
}
export default Plants;