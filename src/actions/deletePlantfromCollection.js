export const deletePlantfromCollection = (user_id, collection_id, plant) => {
    return (dispatch) => {
        fetch(`http://localhost:3000/api/v1/users/${user_id}/collections/${collection_id}/plants`, {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            method: 'PATCH',
            body: JSON.stringify(plant)
        })
        .then(resp => resp.json())
        .then(collection => dispatch({
            type: 'DELETE_PLANT_FROM_COLLECTION',
            payload: collection.data
        }))
    }
    
}