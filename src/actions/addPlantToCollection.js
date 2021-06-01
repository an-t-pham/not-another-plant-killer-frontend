import getMessages from './getMessages';

export const addPlantToCollection = (user_id, collection_id, plant) => {
    return (dispatch) => {
        fetch(`http://localhost:3000/api/v1/users/${user_id}/collections/${collection_id}/plants`, {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            method: 'POST',
            body: JSON.stringify(plant)
        })
        .then(resp => getMessages(resp, dispatch, "The Plant has successfully been added"))
        .then(collection => dispatch({
            type: 'ADD_PLANT_TO_COLLECTION',
            payload: collection.data
        }))
    }
    
}