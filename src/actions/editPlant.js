import getMessages from "./getMessages";
import { BASE_URL } from "./config";
export const editPlant = (plant, id) => {
	return (dispatch) => {
		fetch(`${BASE_URL}/plants/${id}`, {
			headers: {
				"Content-Type": "application/json",
				"Accept": "application/json"
			},
			method: "PATCH",
			body: JSON.stringify(plant)
		})
			.then(resp => getMessages(resp, dispatch, "Plant has successfully been edited"))
			.then(plant => dispatch({
				type: "EDIT_PLANT",
				payload: plant.data
			}))
			.catch(err => err.message);
	};
    
};