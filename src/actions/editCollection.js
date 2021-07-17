import getMessages from "./getMessages";
import { BASE_URL } from "./config";
export const editCollection = (user_id, collection_id, collection) => {
	return (dispatch) => {
		fetch(`${BASE_URL}/users/${user_id}/collections/${collection_id}`, {
			headers: {
				"Content-Type": "application/json",
				"Accept": "application/json"
			},
			method: "PATCH",
			body: JSON.stringify(collection)
		})
			.then(resp => getMessages(resp, dispatch, "Collection has successfully been edited"))
			.then(collection => dispatch({
				type: "EDIT_COLLECTION",
				payload: collection.data
			}))
			.catch(err => console.log(err));
	};
    
};