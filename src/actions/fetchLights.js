import { BASE_URL } from "./config";
export const fetchLights = () => {
	return (dispatch) => {
		fetch(`${BASE_URL}/lights`)
			.then(resp => resp.json())
			.then(lights => dispatch({
				type: "FETCH_LIGHTS",
				payload: lights.data
			}));
	};
    
};