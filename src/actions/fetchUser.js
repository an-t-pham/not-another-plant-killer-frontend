export const fetchUser = (user) => {
    return (dispatch) => {
        fetch('http://localhost:3000/api/v1/users', {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            method: 'POST',
            body: JSON.stringify(user)
        })
        .then(resp => resp.json())
        .then(user => dispatch({
            type: 'FETCH_USER',
            payload: user.data
        }))
    }
    
}