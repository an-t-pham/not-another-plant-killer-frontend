import { useCallback } from "react";
import { useAuth0 } from "@auth0/auth0-react";

const domain = "an-tp.eu.auth0.com";
const baseUrl = "http://localhost:3000";


export const useApiRequest = () => {
    const { getAccessTokenSilently } = useAuth0();

    const request = useCallback(async (url) => {
        try {
            const accessToken = await getAccessTokenSilently({
                audience: authUrl + "/",
                scope: "read:current_user",
            });

        
            const response =  await fetch(`${baseUrl}${url}`, {
                headers: {
                    Authorization: `Bearer ${accessToken}`,
                }
            });

            return response.json()
        } catch (e) {
            console.log(e.message);
        }
    }, [getAccessTokenSilently]) 
   
   return request;
}