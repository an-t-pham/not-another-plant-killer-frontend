export const fetchCollections = (user_id) => {
    return (dispatch) => {
        fetch(`http://localhost:3000/api/v1/users/${user_id}/collections`)
        .then(resp => resp.json())
        .then(collections => dispatch({
            type: 'FETCH_COLLECTIONS',
            payload: collections.data
        }))
    }
}