import { useCallback } from "react";
import { useAuth0 } from "@auth0/auth0-react";

const domain = "an-tp.eu.auth0.com";
const baseUrl = "http://localhost:3000";
const authUrl = `https://${domain}/api/v2`

export const useApiRequest = () => {
    const { getAccessTokenSilently } = useAuth0();

    const request = useCallback(async (url, asAuth = false) => {
        try {
            const accessToken = await getAccessTokenSilently({
                audience: authUrl + "/",
                scope: "read:current_user",
            });

            const host = asAuth ? authUrl : baseUrl ;
        
            const response =  await fetch(`${host}${url}`, {
                headers: {
                    Authorization: `Bearer ${accessToken}`,
                }
            });

            return response.json()
        } catch (e) {
            console.log(e.message);
        }
    }, []) 
   
   return request;
}