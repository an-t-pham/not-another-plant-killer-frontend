import React from 'react';
import Plant from './Plant';

const Plants = ( {plants} ) => {
    return (
        <div>
          <ul>
             {plants.map(plant => <li key={plant.id}><Plant plant={plant}/></li>)}
          </ul>
        </div>
    )
}

export default Plants;