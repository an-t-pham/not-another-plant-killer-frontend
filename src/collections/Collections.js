import React from 'react';
import { Link } from 'react-router-dom';

const Collections = ( {collections} ) => {
    console.log("here")
    return (
        <div>
            <ul>
                {collections.map(collection => collection && (
                    <Link to={`/profile/collections/${collection.attributes.slug}`} key={collection.id}>
                        <li>
                            {collection.attributes.name}
                        </li>
                    </Link>))
                } 
            </ul>

        </div>
    )
}

export default Collections;