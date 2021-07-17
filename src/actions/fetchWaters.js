import { BASE_URL } from "./config";
export const fetchWaters = () => {
	return (dispatch) => {
		fetch(`${BASE_URL}/waters`)
			.then(resp => resp.json())
			.then(waters => dispatch({
				type: "FETCH_WATERS",
				payload: waters.data
			}));
	};
    
};