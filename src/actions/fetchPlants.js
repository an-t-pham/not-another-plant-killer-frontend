import { BASE_URL } from "./config";
export const fetchPlants = () => {
	return (dispatch) => {
		fetch(`${BASE_URL}/plants`)
			.then(resp => resp.json())
			.then(plants => dispatch({
				type: "FETCH_PLANTS",
				payload: plants.data
			}));
	};
    
};