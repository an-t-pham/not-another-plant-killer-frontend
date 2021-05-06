import React from 'react';
import Plant from './Plant';

const Plants = ( {plants} ) => {
    return (
        <div>
           <ul>{plants.map(plant => <Plant plant={plant}/>)}</ul>
        </div>
    )
}

export default Plants;