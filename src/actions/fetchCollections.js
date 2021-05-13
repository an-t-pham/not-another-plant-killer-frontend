export const fetchCollection = () => {
    return (dispatch) => {
        fetch('http://localhost:3000/api/v1/collections')
        .then(resp => resp.json())
        .then(collections => dispatch({
            type: 'FETCH_COLLECTIONS',
            payload: collections.data
        }))
    }
    
}