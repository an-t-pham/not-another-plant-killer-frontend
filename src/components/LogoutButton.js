import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

  
const LogoutButton = () => {
    const { logout } = useAuth0();
  
    return (
        <div style={{ backgroundColor: '#00000014', color: '#f50057', padding: '6px 16px', fontFamily: 'Roboto' }} onClick={() => logout({ returnTo: window.location.origin})}>
            Log Out
        </div>
    );
};

export default LogoutButton;