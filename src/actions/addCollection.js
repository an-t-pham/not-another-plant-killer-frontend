import getErrors from './getErrors';

export const addCollection = (collection, user_id) => {
    return (dispatch) => {
        fetch(`http://localhost:3000/api/v1/users/${user_id}/collections`, {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            method: 'POST',
            body: JSON.stringify(collection)
        })
        .then(resp => getErrors(resp, dispatch))
        .then(collection => dispatch({
            type: 'ADD_COLLECTION',
            payload: collection.data
        }))
        .catch(err => err.message)
    }
    
}