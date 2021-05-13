export const deletePlant = (id) => {
    return (dispatch) => {
        fetch(`http://localhost:3000/api/v1/plants/${id}`, {
            method: 'DELETE'
        })
        .then(() => dispatch({
            type: 'DELETE_PLANT',
            payload: id
        }))
    }
} 