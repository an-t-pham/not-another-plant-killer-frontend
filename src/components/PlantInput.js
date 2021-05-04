import React from 'react';

export default class PlantInput extends React.Component {

    state = {
        name: "",
        aka: "",
        description: "",
        sizePot: "",
        petFriendly: false,
        waterLevel: "1",
        lightLevel: "1"
    }

    handleChange = (e) => {
       this.setState({
        [e.target.name]: e.target.value
       })
    }

    handleChecked = (e) => {
        this.setState({
            petFriendly: e.target.checked
           })
    }

    handleWaterLevel= (e) => {
        this.setState({
            waterLevel: e.target.value
        })
    }

    handleLightLevel= (e) => {
        this.setState({
            lightLevel: e.target.value
        })
    }
    render() {
        return (
           <div>
               <form>
                   <label>Plant Name: </label>
                   <input type="text" placeholder="Name" name="name" value={this.state.name} onChange={this.handleChange}/><br/>
                   <label>AKA: </label>
                   <input type="text" placeholder="aka" name="aka" value={this.state.aka} onChange={this.handleChange} /><br/>
                   <label>Description: </label>
                   <input type="text" placeholder="Description" name="description" value={this.state.description} onChange={this.handleChange} /><br/>
                   <label>Recomended size pot in inch: </label>
                   <input type="text" placeholder="size pot" name="sizePot" value={this.state.sizePot} onChange={this.handleChange} /><br/>
                   <label>Pet Friendly: </label>
                   <input type="checkbox" name="petFriendly" onChange={this.handleChecked} checked={this.state.petFriendly} /><br/>
                   <p>Watering:</p>
                      <input type="radio" id="1" name="water1" checked={this.state.waterLevel === "1"} value="1" onChange={this.handleWaterLevel} />
                      <label>Level 1 - Water once or twice a month, less in winter.</label><br />
                      <input type="radio" id="2" name="water2" checked={this.state.waterLevel === "2"} value="2" onChange={this.handleWaterLevel} />
                      <label>Level 2 - Water once a week, much less in winter.</label><br />
                      <input type="radio" id="3" name="water3" checked={this.state.waterLevel === "3"} value="3" onChange={this.handleWaterLevel} />
                      <label>Level 3 - Water twice a week during summer, once a week during winter.</label><br />
                      <input type="radio" id="4" name="water4" checked={this.state.waterLevel === "4"} value="4" onChange={this.handleWaterLevel} />
                      <label>Level 4 - Water every two to three days, less in winter.</label><br /> 

                    <p>Light Condition:</p>
                      <input type="radio" id="1" name="light" checked={this.state.lightLevel === "1"} alue="1" onChange={this.handleLightLevel} />
                      <label>Level 1 - Prefers indirect sunlight.</label><br />
                      <input type="radio" id="2" name="light" checked={this.state.lightLevel === "2"} value="2" onChange={this.handleLightLevel} />
                      <label>Level 2 - Thrives in moderate sunlight.</label><br />
                      <input type="radio" id="3" name="light" checked={this.state.lightLevel === "3"} value="3" onChange={this.handleLightLevel} />
                      <label>Level 3 - Loves bright but indirect sunlight.</label><br />
                      <input type="radio" id="4" name="light" checked={this.state.lightLevel === "4"} value="4" onChange={this.handleLightLevel} />
                      <label>Level 4 - Flourishes in bright sunlight.</label><br /> 

                   <input type="submit" value="Submit" />
                 
               </form>
           </div>
        )
    }
}