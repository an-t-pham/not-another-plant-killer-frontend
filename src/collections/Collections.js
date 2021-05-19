import React from 'react';
import { Link } from 'react-router-dom';

const Collections = ( {collections} ) => {
    return (
            <ul>
                {collections.map(collection => collection && (
                    <Link to={`/profile/collections/${collection.attributes.slug}`} key={collection.id}>
                        <li>
                            {collection.attributes.name}
                        </li>
                    </Link>))
                } 
            </ul>
    )
}

export default Collections;