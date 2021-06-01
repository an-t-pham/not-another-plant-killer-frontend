export const deleteCollection = (user_id, collection_id) => {
    return (dispatch) => {
        fetch(`http://localhost:3000/api/v1/users/${user_id}/collections/${collection_id}`, {
            method: 'DELETE'
        })
        .then(() => dispatch({
            type: 'DELETE_COLLECTION',
            payload: collection_id
        }))
        .then(() => dispatch({
            type: 'SET_SUCCESS',
            payload: 'Collection has been successfully deleted'
        }))
    }
} 