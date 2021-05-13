export const addPlant = (plant) => {
    return (dispatch) => {
        fetch('http://localhost:3000/api/v1/plants', {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            method: 'POST',
            body: JSON.stringify(plant)
        })
        .then(resp => resp.json())
        .then(plant => dispatch({
            type: 'ADD_PLANT',
            payload: plant.data
        }))
    }
    
}