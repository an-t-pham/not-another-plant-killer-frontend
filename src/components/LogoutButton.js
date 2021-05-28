import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import pink from '@material-ui/core/colors/pink';

  
const LogoutButton = () => {
    const { logout } = useAuth0();
  
    return (
        <div style={{ backgroundColor: '#00000014', color: pink[200], padding: '6px 16px', fontFamily: 'Roboto' }} onClick={() => logout({ returnTo: window.location.origin})}>
            Log Out
        </div>
    );
};

export default LogoutButton;