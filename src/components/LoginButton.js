import React from "react";
import { useAuth0} from "@auth0/auth0-react";
import Button from '@material-ui/core/Button';
import pink from '@material-ui/core/colors/pink';

// import { useApiRequest } from "../api";

const LoginButton = () => {
    const { loginWithRedirect } = useAuth0();

    return <Button 
            onClick={() => loginWithRedirect()} 
            variant="outlined" 
            style={{color: pink[200], borderColor: pink[200], position: 'absolute', top: '50%', left: '50%'}}
            >
              Log In
            </Button>
};

export default LoginButton;