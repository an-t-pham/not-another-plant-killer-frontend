import React from 'react';
import { connect } from 'react-redux';
import { addPlant } from '../actions/addPlant';
 class PlantInput extends React.Component {

    state = {
        name: "",
        aka: "",
        description: "",
        size_pot: "",
        pet_friendly: false,
        water: "1",
        light: 1
    }

    handleChange = (e) => {
       this.setState({
        [e.target.name]: e.target.value
       })
    }

    handleChecked = (e) => {
        this.setState({
            pet_friendly: e.target.checked
           })
    }

    handleWaterLevel = (e) => {
        this.setState({
            water: e.target.value
        })
    }

    handleLightLevel = (e) => {
        this.setState({
            light: parseInt(e.target.value)
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.addPlant(this.state);
    }

    
   

    render() {
       console.log(this.props.lights)
       console.log(this.state.light)
        return (
           <div>
               <form onSubmit={this.handleSubmit}>
                   <label>Plant Name: </label>
                   <input type="text" placeholder="Name" name="name" value={this.state.name} onChange={this.handleChange}/><br/>
                   <label>AKA: </label>
                   <input type="text" placeholder="aka" name="aka" value={this.state.aka} onChange={this.handleChange} /><br/>
                   <label>Description: </label>
                   <input type="text" placeholder="Description" name="description" value={this.state.description} onChange={this.handleChange} /><br/>
                   <label>Recomended size pot in inch: </label>
                   <input type="text" placeholder="size pot" name="size_pot" value={this.state.size_pot} onChange={this.handleChange} /><br/>
                   <label>Pet Friendly: </label>
                   <input type="checkbox" name="pet_friendly" onChange={this.handleChecked} checked={this.state.pet_friendly} /><br/>
                   <p>Watering:</p>
                      <input type="radio" id="1" name="water1" checked={this.state.water === "1"} value="1" onChange={this.handleWaterLevel} />
                      <label>Level 1 - Water once or twice a month, less in winter.</label><br />
                      <input type="radio" id="2" name="water2" checked={this.state.water === "2"} value="2" onChange={this.handleWaterLevel} />
                      <label>Level 2 - Water once a week, much less in winter.</label><br />
                      <input type="radio" id="3" name="water3" checked={this.state.water === "3"} value="3" onChange={this.handleWaterLevel} />
                      <label>Level 3 - Water twice a week during summer, once a week during winter.</label><br />
                      <input type="radio" id="4" name="water4" checked={this.state.water === "4"} value="4" onChange={this.handleWaterLevel} />
                      <label>Level 4 - Water every two to three days, less in winter.</label><br /> 

                    <p>Light Condition:</p>
                      { this.props.lights && this.props.lights.map(light => (
                        <div key={light.id}>
                            <input type="radio" name="light" checked={this.state.light === light.attributes.level} value={light.attributes.level} onChange={this.handleLightLevel} />
                            <label>Level {light.attributes.level} - {light.attributes.description}.</label>
                            <br />
                        </div>)
                        )}

                   <input type="submit" value="Submit" />
                 
               </form>
           </div>
        )
    }
}

export default connect(null, { addPlant }) (PlantInput);