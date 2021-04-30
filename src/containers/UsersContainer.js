import React from 'react';
import LogoutButton from '../components/LogoutButton';
import Profile from '../components/Profile';


export default class UsersContainer extends React.Component {
    render() {
        return (
           <div>
               <Profile />
           
               <LogoutButton />
           </div>
        )
    }
}