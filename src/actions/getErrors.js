const getErrors = async (response, dispatch) => {
    if (response.ok) {
        return response.json();
      } else {
          const json = await response.json()
          dispatch({
            type: 'SET_ERRORS',
            payload: json.errors
        })
        throw new Error(json.errors);
      }
}

export default getErrors;