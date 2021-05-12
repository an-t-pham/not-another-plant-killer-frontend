import React from 'react';
import { fetchLights } from '../actions/fetchLights';
import { fetchWaters } from '../actions/fetchWaters';
import { connect } from 'react-redux';

 class PlantInput extends React.Component {

    componentDidMount() {
        console.log(this.props.plant)
       
        this.props.fetchLights()
        this.props.fetchWaters()
        this.props.plant && (
            this.setState({
                ...this.props.plant.attributes,
                water: "" + this.props.plant.attributes.water.level,
                light: "" + this.props.plant.attributes.light.level
            })
        )
    }

    state = {
        name: "",
        aka: "",
        image_url: "",
        description: "",
        size_pot: "",
        pet_friendly: false,
        water: "1",
        light: "1"
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
            light: e.target.value
        })
    }

    // handleSubmit = (e) => {
    //     e.preventDefault();
    //     this.props.addPlant(this.state);
    //     this.setState({
    //        name: "",
    //        aka: "",
    //        image_url: "",
    //        description: "",
    //        size_pot: "",
    //        pet_friendly: false,
    //        water: "1",
    //        light: "1"
    //     })
    // }

    onSubmit = (e) => {
        e.preventDefault();
        this.props.handleSubmit(this.state);
        this.setState({
            name: "",
            aka: "",
            image_url: "",
            description: "",
            size_pot: "",
            pet_friendly: false,
            water: "1",
            light: "1"
         })
    }

    
   

    render() {
        return (
           <div>
               <form onSubmit={this.onSubmit}>
                   <label>Plant Name: </label>
                   <input type="text" placeholder="Name" name="name" value={this.state.name} onChange={this.handleChange}/><br/>
                   <br />
                   <label>AKA: </label>
                   <input type="text" placeholder="aka" name="aka" value={this.state.aka} onChange={this.handleChange} /><br/>
                   <br />
                   <label>Image URL: </label>
                   <input type="text" placeholder="Image URL" name="image_url" value={this.state.image_url} onChange={this.handleChange} /><br/>
                   <br />
                   <label>Description: </label>
                   <input type="text" placeholder="Description" name="description" value={this.state.description} onChange={this.handleChange} /><br/>
                   <br />
                   <label>Recomended size pot in inch: </label>
                   <input type="text" placeholder="size pot" name="size_pot" value={this.state.size_pot} onChange={this.handleChange} /><br/>
                   <br />
                   <label>Pet Friendly: </label>
                   <input type="checkbox" name="pet_friendly" onChange={this.handleChecked} checked={this.state.pet_friendly} /><br/>
                   <p>Watering:</p>
                   { this.props.waters && this.props.waters.map(water => (
                        <div key={water.id}>
                            <input type="radio" name="water" checked={this.state.water === "" + water.attributes.level} value={water.attributes.level} onChange={this.handleWaterLevel} />
                            <label>Level {water.attributes.level} - {water.attributes.description}.</label>
                            <br />
                        </div>)
                        )}

                    <p>Light Condition:</p>
                      { this.props.lights && this.props.lights.map(light => (
                        <div key={light.id}>
                            <input type="radio" name="light" checked={this.state.light === "" + light.attributes.level} value={light.attributes.level} onChange={this.handleLightLevel} />
                            <label>Level {light.attributes.level} - {light.attributes.description}. Ideal location: {light.attributes.ideal_location} </label>
                            <br />
                        </div>)
                        )}
                     <br />

                   <input type="submit" value="Submit" />
                 
               </form>
           </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        lights: state.lights,
        waters: state.waters
    }
}


export default connect(mapStateToProps, {fetchLights, fetchWaters})(PlantInput);