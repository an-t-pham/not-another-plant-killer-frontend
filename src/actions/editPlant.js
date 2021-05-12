export const editPlant = (data, id) => {
    return (dispatch) => {
        fetch(`http://localhost:3000/api/v1/plants/${id}`, {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            method: 'PATCH',
            body: JSON.stringify(data)
        })
        .then(resp => resp.json())
        .then(plant => dispatch({
            type: 'EDIT_PLANT',
            payload: plant.data
        }))
    }
    
}