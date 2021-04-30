import React from "react";
import { useAuth0} from "@auth0/auth0-react";
// import { useApiRequest } from "../api";

const LoginButton = () => {
    const { loginWithRedirect } = useAuth0();
    // const apiRequest = useApiRequest();

    // useEffect(() => {
    //     const getUserMetadata = async () => {
    //         const response = await apiRequest("/private")
    //         console.log(response);
    //     }
 
      
    //     getUserMetadata();
    //   }, [apiRequest]);
      
    return <button onClick={() => loginWithRedirect()}>Log In</button>
};

export default LoginButton;