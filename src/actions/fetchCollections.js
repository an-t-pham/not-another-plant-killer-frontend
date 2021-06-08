import { BASE_URL } from './config';

export const fetchCollections = (user_id) => {
    return (dispatch) => {
        fetch(`${BASE_URL}/users/${user_id}/collections`)
        .then(resp => resp.json())
        .then(collections => dispatch({
            type: 'FETCH_COLLECTIONS',
            payload: collections.data
        }))
    }
}