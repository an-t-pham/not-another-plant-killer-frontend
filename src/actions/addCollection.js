import getMessages from "./getMessages";
import { BASE_URL } from "./config";
export const addCollection = (collection, user_id) => {
	return (dispatch) => {
		fetch(`${BASE_URL}/users/${user_id}/collections`, {
			headers: {
				"Content-Type": "application/json",
				"Accept": "application/json"
			},
			method: "POST",
			body: JSON.stringify(collection)
		})
			.then(resp => getMessages(resp, dispatch, "Collection has successfully been created"))
			.then(collection => dispatch({
				type: "ADD_COLLECTION",
				payload: collection.data
			}))
			.catch(err => err.message);
	};
    
};