import React from 'react';
import AddPlantToCollection from './AddPlantToCollection';

import { Redirect } from 'react-router';

const Collection = ( {collection} ) => {
    if(!collection) return null && <Redirect to="profile/collections" />;

    return (
        <div>
            Name: {collection.name}
            <AddPlantToCollection />
        </div>
    )
}

export default Collection;