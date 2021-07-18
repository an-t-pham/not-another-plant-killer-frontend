const getMessages = async (response, dispatch, success=null) => {
	if (response.ok) {
		dispatch({
			type: "SET_SUCCESS",
			payload: success
		});

		return response.json();
	} else {
		const json = await response.json();
		dispatch({
			type: "SET_ERRORS",
			payload: json.errors
		});
		throw new Error(json.errors);
	}
};
export default getMessages;