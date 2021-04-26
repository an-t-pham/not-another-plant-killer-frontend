import React from 'react';
import PlantInput from '../components/PlantInput';
import Plants from '../components/Plants';


export default class PlantsContainer extends React.Component {
    render() {
        return (
           <div>
               <PlantInput />
               <Plants />
           </div>
        )
    }
}