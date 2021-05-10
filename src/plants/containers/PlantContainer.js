import React from 'react';

import { connect } from 'react-redux';
import Plant from '../Plant';



class PlantContainer extends React.Component {
    

  render() {
    let plantSlug = this.props.match && (this.props.match.params.slug);
    let plant = this.props.plants && (this.props.plants.find(plant => plant.attributes.slug === plantSlug)) ;
    return (
     
       <div>
            <Plant plant={plant}/> 
       </div>
    )
  }

}

const mapStateToProps = state => {
    return {
        plants: state.plants,
        
    }
}

export default connect(mapStateToProps) (PlantContainer);
