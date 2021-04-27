import React, { useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";

const LoginButton = () => {
    const { loginWithRedirect, getAccessTokenSilently } = useAuth0();

    useEffect(() => {
        const getUserMetadata = async () => {
          const domain = "an-tp.eu.auth0.com";
      
          try {
            const accessToken = await getAccessTokenSilently({
              audience: `https://${domain}/api/v2/`,
              scope: "read:current_user",
            });
      
            const userDetailsByIdUrl = `http://localhost:3000/private`;
      
            const metadataResponse = await fetch(userDetailsByIdUrl, {
              headers: {
                Authorization: `Bearer ${accessToken}`,
              }
            });
      
            const test = await metadataResponse.json();
            console.log(test)
           
          } catch (e) {
            console.log(e.message);
          }
        };
      
        getUserMetadata();
      }, []);
      
    return <button onClick={() => loginWithRedirect()}>Log In</button>
};

export default LoginButton;