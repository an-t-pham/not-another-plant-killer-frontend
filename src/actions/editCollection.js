import getErrors from './getErrors';

export const editCollection = (user_id, collection_id, collection) => {
    return (dispatch) => {
        fetch(`http://localhost:3000/api/v1/users/${user_id}/collections/${collection_id}`, {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            method: 'PATCH',
            body: JSON.stringify(collection)
        })
        .then(resp => getErrors(resp, dispatch))
        .then(collection => dispatch({
            type: 'EDIT_COLLECTION',
            payload: collection.data
        }))
        .catch(err => console.log(err))
    }
    
}