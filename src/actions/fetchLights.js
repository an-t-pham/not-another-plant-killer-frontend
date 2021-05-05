export const fetchLights = () => {
    return (dispatch) => {
        fetch('http://localhost:3000/api/v1/lights')
        .then(resp => resp.json())
        .then(lights => dispatch({
            type: 'FETCH_LIGHTS',
            payload: lights.data
        }))
    }
    
}