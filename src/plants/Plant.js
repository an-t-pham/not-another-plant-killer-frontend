import React from 'react';


const Plant = ( {plant} ) => {

    if(!plant) return null;
    

    return (
        <div>
                 <img src={plant.attributes.image_url} width="600" alt={plant.attributes.name}/> <br />
                 1. Name: {plant.attributes.name} (aka: {plant.attributes.aka})<br />
                 2. Description: {plant.attributes.description}<br />
                 3. Recomended pot size: {plant.attributes.size_pot} inch<br />
                 4. Pet friendly: {plant.attributes.pet_friendly ?  "Yes" : "No"} <br /> <br />
                 5. Watering:<br />
                    - Level {plant.attributes.water.level}: {plant.attributes.water.description} <br />
                 6. Light Condition:<br />
                    - Level {plant.attributes.light.level}: {plant.attributes.light.description} <br />
                    - Ideal Location: {plant.attributes.light.ideal_location}
                 
        </div>

    )
}

export default Plant;