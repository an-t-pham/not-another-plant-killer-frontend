import React from 'react';


const Plants = ( {plants} ) => {
    
    return (
        <div>
           {plants.map(plant => <li key={plant.id}>Name: {plant.attributes.name} - AKA: {plant.attributes.aka}</li>)}
        </div>
    )
}

export default Plants;