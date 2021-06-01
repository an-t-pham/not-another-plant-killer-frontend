import getMessages from './getErrors';

export const editPlant = (plant, id) => {
    return (dispatch) => {
        fetch(`http://localhost:3000/api/v1/plants/${id}`, {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            method: 'PATCH',
            body: JSON.stringify(plant)
        })
        .then(resp => getMessages(resp, dispatch, 'Plant has successfully been edited'))
        .then(plant => dispatch({
            type: 'EDIT_PLANT',
            payload: plant.data
        }))
        .catch(err => err.message)
    }
    
}