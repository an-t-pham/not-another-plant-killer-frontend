import React, { useEffect, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { useApiRequest } from "../api";
import LogoutButton from "./LogoutButton";

const Profile = () => {
  const { user, isAuthenticated } = useAuth0();
  const [userMetadata, setUserMetadata] = useState(null);
  const apiRequest = useApiRequest();
   
  useEffect(() => {
    const getUserMetadata = async () => { 
      try {
        const { user_metadata } = await apiRequest(`/users/${user.sub}`, true)

        setUserMetadata(user_metadata);
      } catch (e) {
        console.log(e.message);
      }
    };
  
    getUserMetadata();
  }, [apiRequest, user.sub]);

  return (
    isAuthenticated && (
      <div>
        <img src={user.picture} alt={user.name} />
        <h2>{user.name}</h2>
        <p>{user.email}</p>
        <h3>User Metadata</h3>
        {userMetadata ? (
          <pre>{JSON.stringify(userMetadata, null, 2)}</pre>
        ) : (
          "No user metadata defined"
        )}

        <LogoutButton />
      </div>
    )
  );
};

export default Profile;