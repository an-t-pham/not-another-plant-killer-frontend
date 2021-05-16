import React from 'react';

import { Redirect } from 'react-router';

const Collection = ( {collection} ) => {
    if(!collection) return null && <Redirect to="profile/collections" />;

    return (
        <div>
            Name: {collection.name}
        </div>
    )
}

export default Collection;