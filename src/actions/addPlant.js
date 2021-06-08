import getMessages from './getMessages';
import { BASE_URL } from './config';

export const addPlant = (plant) => {
    return (dispatch) => {
            fetch(`${BASE_URL}/plants`, {
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                method: 'POST',
                body: JSON.stringify(plant)
            })
            .then(resp => getMessages(resp, dispatch, "Plant has successfully been created"))
            .then(plant => dispatch({
                type: 'ADD_PLANT',
                payload: plant.data
            }))
            .catch(errors => console.log(errors))
    }
    
}

