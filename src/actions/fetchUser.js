import { BASE_URL } from "./config";
export const fetchUser = (user) => {
	return (dispatch) => {
		fetch(`${BASE_URL}/users`, {
			headers: {
				"Content-Type": "application/json",
				"Accept": "application/json"
			},
			method: "POST",
			body: JSON.stringify(user)
		})
			.then(resp => resp.json())
			.then(user => dispatch({
				type: "FETCH_USER",
				payload: user.data
			}));
	};
    
};