import getMessages from "./getMessages";
import { BASE_URL } from "./config";
export const addPlantToCollection = (user_id, collection_id, plant) => {
	return (dispatch) => {
		fetch(`${BASE_URL}/users/${user_id}/collections/${collection_id}/plants`, {
			headers: {
				"Content-Type": "application/json",
				"Accept": "application/json"
			},
			method: "POST",
			body: JSON.stringify(plant)
		})
			.then(resp => getMessages(resp, dispatch, `${plant.attributes.name} has successfully been added to the Collection`))
			.then(collection => dispatch({
				type: "ADD_PLANT_TO_COLLECTION",
				payload: collection.data
			}));
	};
    
};