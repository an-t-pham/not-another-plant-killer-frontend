import React from 'react';


const Plant = ( {plant} ) => {
    return (
        <div>
                 {/* Name: {plant.attributes.name}<br />
                 AKA: {plant.attributes.aka}<br />
                 Description: {plant.attributes.description}<br />
                 Recomended pot size: {plant.attributes.size_pot} inch<br />
                 Pet friendly: {plant.attributes.pet_friendly ?  "Yes" : "No"} <br /> <br /> */}
                 plant
        </div>
    )
}

export default Plant;