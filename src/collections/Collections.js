import React from 'react';
import { Link } from 'react-router-dom';

const Collections = ( {collections} ) => {
    return (
        <div>
            <ul>
                {collections.map(collection => collection && (
                    <Link to={`/profile/collections/${collection.attributes.slug}`} key={collection.id}>
                        <li>
                            {/* <img src={plant.attributes.image_url} width="300" alt={plant.attributes.name}/> <br /> */}
                            {collection.attributes.name}
                        </li>
                    </Link>))
                } 
            </ul>

        </div>
    )
}

export default Collections;