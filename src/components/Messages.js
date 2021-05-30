import React, { useEffect } from "react";
import Alert from '@material-ui/lab/Alert';
import { useDispatch } from "react-redux";

const Messages = ( {messages} ) => {
  const dispatch = useDispatch();

  useEffect(() => {
    if (messages.length > 0 ) {
      setTimeout(onClose, 3000)
    }
  }, [messages.length])


  const onClose = () => {
    dispatch({
      type: 'SET_ERRORS',
      payload: []
  })
  }

    return (
      <div style={{position: 'absolute', top: '100px', width: '80%', margin: 'auto', left: '10%'}}>
        {messages.map(message => <Alert severity="error" onClose={onClose}>{message}</Alert>)}
      </div>
    )
}

export default Messages;