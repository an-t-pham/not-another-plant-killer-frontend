export const fetchWaters = () => {
    return (dispatch) => {
        fetch('http://localhost:3000/api/v1/waters')
        .then(resp => resp.json())
        .then(waters => dispatch({
            type: 'FETCH_WATERS',
            payload: waters.data
        }))
    }
    
}