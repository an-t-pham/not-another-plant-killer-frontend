import React from 'react';
import { Link } from 'react-router-dom';


const Plants = ( {plants} ) => {
    return (
        <div>
            <ul>
                {plants.map(plant => plant && (
                    <Link to={`/plants/${plant.attributes.slug}`} key={plant.id}>
                        <li>
                            <img src={plant.attributes.image_url} width="300" alt={plant.attributes.name}/> <br />
                            {plant.attributes.formatted_name}
                        </li>
                    </Link>))
                } 
            </ul>

        </div>
    )
}
export default Plants;