export function fetchPlants() {
    return (dispatch) => {
        fetch('http://localhost:3000/api/v1/plants')
        .then(resp => resp.json())
        .then(plants => dispatch({
            type: 'FETCH_PLANTS',
            payload: plants.data
        }))
    }
    
}