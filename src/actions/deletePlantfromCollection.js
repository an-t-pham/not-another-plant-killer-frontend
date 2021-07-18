import getMessages from "./getMessages";
import { BASE_URL } from "./config";
export const deletePlantfromCollection = (user_id, collection_id, plant) => {
	return (dispatch) => {
		fetch(`${BASE_URL}/users/${user_id}/collections/${collection_id}/plants`, {
			headers: {
				"Content-Type": "application/json",
				"Accept": "application/json"
			},
			method: "PATCH",
			body: JSON.stringify(plant)
		})
			.then(resp => getMessages(resp, dispatch, "The Plant has successfully been deleted"))
			.then(collection => dispatch({
				type: "DELETE_PLANT_FROM_COLLECTION",
				payload: collection.data
			}));
	};
    
};