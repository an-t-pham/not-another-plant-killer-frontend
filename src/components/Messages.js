import React, { useEffect, useCallback } from "react";
import Alert from "@material-ui/lab/Alert";
import { useDispatch } from "react-redux";

const Messages = ( {messages} ) => {
	const dispatch = useDispatch();

	const clearMessages = useCallback(() => {
		dispatch({
			type: "CLEAR_MESSAGES"
		});
	}, [dispatch]);
	useEffect(() => {
		if (messages.errors.length > 0 || messages.success ) {
			setTimeout(clearMessages, 2000);
		}
	}, [messages.errors.length, messages.success, clearMessages]);

	return (
		<div style={{position: "absolute", top: "100px", width: "80%", margin: "auto", left: "10%"}}>
			{messages.errors.length > 0 &&
              messages.errors.map(error => <Alert severity="error" onClose={clearMessages}>{error}</Alert>)}
			{messages.success && <Alert severity="success" onClose={clearMessages}>{messages.success}</Alert>}
        
		</div>
	);
};
export default Messages;