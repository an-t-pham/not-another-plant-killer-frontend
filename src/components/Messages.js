import React, { useEffect } from "react";
import Alert from '@material-ui/lab/Alert';
import { useDispatch } from "react-redux";

const Messages = ( {messages} ) => {
  const dispatch = useDispatch();

  useEffect(() => {
    if (messages.errors.length > 0 || messages.success ) {
      setTimeout(clearMessages, 4000)
    }
  }, [messages.errors.length, messages.success])


  const clearMessages = () => {
    dispatch({
      type: 'CLEAR_MESSAGES'
     })
  }

    return (
      <div style={{position: 'absolute', top: '100px', width: '80%', margin: 'auto', left: '10%'}}>
        {messages.errors.length > 0 &&
              messages.errors.map(error => <Alert severity="error" onClose={clearMessages}>{error}</Alert>)}
        {messages.success && <Alert severity="success" onClose={clearMessages}>{messages.success}</Alert>}
        
      </div>
    )
}

export default Messages;