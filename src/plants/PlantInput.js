import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import pink from '@material-ui/core/colors/pink';
import teal from '@material-ui/core/colors/teal';
import SendIcon from '@material-ui/icons/Send';

 const PlantInput = ({ plant, handleSubmit }) => {

    const [plantForm, setPlantForm] = useState({
                                      name: "",
                                      aka: "",
                                      image_url: "",
                                      description: "",
                                      size_pot: "",
                                      pet_friendly: false,
                                      water: "1",
                                      light: "1"
                                    });
    
    const dispatch = useDispatch();
    const lights = useSelector((state) => state.lights)
    const waters = useSelector((state) => state.waters)

    useEffect(() => {
       plant && (
           setPlantForm({
               ...plant.attributes,
               water: "" + plant.attributes.water.level,
               light: "" + plant.attributes.light.level
           })
       )
    }, [plant, lights, waters, dispatch, setPlantForm])

    const handleChange = (e) => {
        setPlantForm(prevState => ({
          ...prevState,
          [e.target.name]: e.target.value
        }));
     }

    const handleChecked = (e) => {
        setPlantForm(prevState => ({
          ...prevState,
          pet_friendly: e.target.checked
        }))
    }
    
    const handleWaterLevel = (e) => {
        setPlantForm(prevState => ({
          ...prevState,
          water: e.target.value
        }))
    }

    const handleLightLevel = (e) => {
        setPlantForm(prevState => ({
          ...prevState,
          light: e.target.value
        }))
    }

    const onSubmit = (e) => {
        e.preventDefault();
        handleSubmit(plantForm);
        setPlantForm({
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
   console.log(plantForm)
        return (
               <form style={{ backgroundColor: teal[900], color: pink[100], padding: '30px', width:'35%', margin:'100px auto', fontFamily: 'Roboto' }} >
                   <label>Plant Name: </label>
                   <input type="text" placeholder="name" name="name" value={plantForm.name} onChange={handleChange}/><br/>
                   <br />
                   <label>AKA: </label>
                   <input type="text" placeholder="aka" name="aka" value={plantForm.aka} onChange={handleChange} /><br/>
                   <br />
                   <label>Image URL: </label>
                   <input type="text" placeholder="image url" name="image_url" value={plantForm.image_url} onChange={handleChange} /><br/>
                   <br />
                   <label>Description: </label>
                   <input type="text" placeholder="description" name="description" value={plantForm.description} onChange={handleChange} /><br/>
                   <br />
                   <label>Recomended size pot in inch: </label>
                   <input type="text" placeholder="size pot" name="size_pot" value={plantForm.size_pot} onChange={handleChange} /><br/>
                   <br />
                   <label>Pet Friendly: </label>
                   <input type="checkbox" name="pet_friendly" onChange={handleChecked} checked={plantForm.pet_friendly} /><br/>
                   <p>Watering:</p>
                   { waters && waters.map(water => (
                        <div key={water.id}>
                            <input type="radio" name="water" checked={plantForm.water === "" + water.attributes.level} value={water.attributes.level} onChange={handleWaterLevel} />
                            <label>Level {water.attributes.level} - {water.attributes.description}.</label>
                            <br />
                        </div>)
                        )}

                    <p>Light Condition:</p>
                      { lights && lights.map(light => (
                        <div key={light.id}>
                            <input type="radio" name="light" checked={plantForm.light === "" + light.attributes.level} value={light.attributes.level} onChange={handleLightLevel} />
                            <label>Level {light.attributes.level} - {light.attributes.description}. Ideal location: {light.attributes.ideal_location} </label>
                            <br />
                        </div>)
                        )}
                     <br />
                   <SendIcon  onClick={(e) => onSubmit(e)}/>
                 
               </form>
        )
}
export default PlantInput;