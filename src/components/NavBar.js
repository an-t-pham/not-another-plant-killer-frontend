import React from 'react';
import { NavLink } from 'react-router-dom';
import { useAuth0 } from "@auth0/auth0-react";
import LogoutButton from './LogoutButton';

export const NavBar = () => {
    const { isAuthenticated } = useAuth0();
        return (
            <>
              { isAuthenticated && (
                 <div style={{ borderBottom: '2px solid black', paddingBottom: '10px', marginBottom: '12px' }}>
                  <NavLink 
                    style={{ marginRight: '10px' }} 
                    to="/profile"
                  >
                    Profile
                  </NavLink>
        

                  <NavLink 
                    style={{ marginRight: '10px' }} 
                    to="/profile/collections"
                  >
                    Your Collections
                  </NavLink>


                  <NavLink 
                    style={{ marginRight: '10px' }} 
                    to="/plants"
                  >
                    All Plants
                  </NavLink>
              
                  <LogoutButton />
                  </div>
                     )}
             
            
           </>
         );

      
};

