import { BASE_URL } from "./config";
export const deletePlant = (id) => {
	return (dispatch) => {
		fetch(`${BASE_URL}/plants/${id}`, {
			method: "DELETE"
		})
			.then(() => dispatch({
				type: "DELETE_PLANT",
				payload: id
			}))
			.then(() => dispatch({
				type: "SET_SUCCESS",
				payload: "Plant has been successfully deleted"
			}));
	};
}; 