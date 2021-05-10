import React from 'react';
import { Link } from 'react-router-dom';

const Plants = ( {plants} ) => {
    return (
        <div>
            <ul>
                {plants.map(plant => (
                    <Link to={`/plants/${plant.attributes.slug}`}>
                        <li key={plant.id}>
                            <img src={plant.attributes.image_url} width="300" alt={plant.attributes.name}/> <br />
                            {plant.attributes.name}
                        </li>
                    </Link>))
                } 
            </ul>
        </div>
    )
}
export default Plants;