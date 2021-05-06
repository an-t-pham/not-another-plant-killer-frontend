import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
// import { useApiRequest } from "../api";
import { NavBar } from "./NavBar";


const Profile = () => {
  const { user, isAuthenticated } = useAuth0();

  return (
    
    isAuthenticated && (
      
      <div>
         <NavBar />
        <img src={user.picture} alt={user.name} />
        <h2>{user.name}</h2>
        <p>{user.email}</p>
      </div>
    )
  );
};

export default Profile;