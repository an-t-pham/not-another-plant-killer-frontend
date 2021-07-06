import React, { useEffect, useState } from 'react';
import { fetchLights } from '../actions/fetchLights';
import { fetchWaters } from '../actions/fetchWaters';
import { useSelector, useDispatch } from 'react-redux';

import pink from '@material-ui/core/colors/pink';
import teal from '@material-ui/core/colors/teal';
import SendIcon from '@material-ui/icons/Send';
import { StarsTwoTone } from '@material-ui/icons';


//  class PlantInput extends React.Component {
 const PlantInput = ({ plant, handleSubmit }) => {

    const [state, setState] = useState({
                                      name: "",
                                      aka: "",
                                      image_url: "",
                                      description: "",
                                      size_pot: "",
                                      pet_friendly: false,
                                      water: "1",
                                      light: "1"
                                    });
    const { name, value, checked } = e.target;
    const dispatch = useDispatch();
    const lights = useSelector((state) => state.lights)
    const waters = useSelector((state) => state.waters)

    useEffect(() => {
       dispatch(fetchLights());
       dispatch(fetchWaters());
       plant && (
           setState(prevState => ({
               ...prevState,
               water: "" + plant.attributes.water.level,
               light: "" + plant.attributes.light.level
           }))
       )
    }, [plant, lights, waters, dispatch])

    // componentDidMount() { 
    //     this.props.fetchLights()
    //     this.props.fetchWaters()
    //     this.props.plant && (
    //         this.setState({
    //             ...this.props.plant.attributes,
    //             water: "" + this.props.plant.attributes.water.level,
    //             light: "" + this.props.plant.attributes.light.level
    //         })
    //     )
    // }

    // state = {
    //     name: "",
    //     aka: "",
    //     image_url: "",
    //     description: "",
    //     size_pot: "",
    //     pet_friendly: false,
    //     water: "1",
    //     light: "1"
    // }
    const handleChange = (e) => {
        setState(prevState => ({
          ...prevState,
          [name]: value
        }));
     }
    // handleChange = (e) => {
    //    this.setState({
    //      [e.target.name]: e.target.value
    //    })
    // }
    const handleChecked = (e) => {
        setState(prevState => ({
          ...prevState,
          pet_friendly: checked
        }))
    }
    // handleChecked = (e) => {
    //     this.setState({
    //       pet_friendly: e.target.checked
    //     })
    // }
    
    const handleWaterLevel = (e) => {
        setState(prevState => ({
          ...prevState,
          water: value
        }))
    }
    // handleWaterLevel = (e) => {
    //     this.setState({
    //       water: e.target.value
    //     })
    // }
    const handleLightLevel = (e) => {
        setState(prevState => ({
          ...prevState,
          light: value
        }))
    }
    // handleLightLevel = (e) => {
    //     this.setState({
    //       light: e.target.value
    //     })
    // }
    const onSubmit = (e) => {
        e.preventDefault();
        handleSubmit(state);
        setState({
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
    // onSubmit = (e) => {
    //     e.preventDefault();
    //     this.props.handleSubmit(this.state);
    //     this.setState({
    //         name: "",
    //         aka: "",
    //         image_url: "",
    //         description: "",
    //         size_pot: "",
    //         pet_friendly: false,
    //         water: "1",
    //         light: "1"
    //      })
    // }

    
   

    // render() {
        return (
               <form style={{ backgroundColor: teal[900], color: pink[100], padding: '30px', width:'35%', margin:'auto', marginTop:'100px', fontFamily: 'Roboto' }} >
                   <label>Plant Name: </label>
                   <input type="text" placeholder="name" name="name" value={state.name} onChange={handleChange}/><br/>
                   <br />
                   <label>AKA: </label>
                   <input type="text" placeholder="aka" name="aka" value={state.aka} onChange={handleChange} /><br/>
                   <br />
                   <label>Image URL: </label>
                   <input type="text" placeholder="image url" name="image_url" value={state.image_url} onChange={handleChange} /><br/>
                   <br />
                   <label>Description: </label>
                   <input type="text" placeholder="description" name="description" value={state.description} onChange={handleChange} /><br/>
                   <br />
                   <label>Recomended size pot in inch: </label>
                   <input type="text" placeholder="size pot" name="size_pot" value={state.size_pot} onChange={handleChange} /><br/>
                   <br />
                   <label>Pet Friendly: </label>
                   <input type="checkbox" name="pet_friendly" onChange={handleChecked} checked={state.pet_friendly} /><br/>
                   <p>Watering:</p>
                   { waters && waters.map(water => (
                        <div key={water.id}>
                            <input type="radio" name="water" checked={state.water === "" + water.attributes.level} value={water.attributes.level} onChange={handleWaterLevel} />
                            <label>Level {water.attributes.level} - {water.attributes.description}.</label>
                            <br />
                        </div>)
                        )}

                    <p>Light Condition:</p>
                      { lights && lights.map(light => (
                        <div key={light.id}>
                            <input type="radio" name="light" checked={state.light === "" + light.attributes.level} value={light.attributes.level} onChange={handleLightLevel} />
                            <label>Level {light.attributes.level} - {light.attributes.description}. Ideal location: {light.attributes.ideal_location} </label>
                            <br />
                        </div>)
                        )}
                     <br />
                   <SendIcon  onClick={(e) => onSubmit(e)}/>
                 
               </form>
        )
    // }
}

// const mapStateToProps = state => {
//     return {
//         lights: state.lights,
//         waters: state.waters
//     }
// }


export default PlantInput;