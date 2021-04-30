import React from 'react';
import Collections from '../components/Collections';
import LogoutButton from '../components/LogoutButton';
import UserPlants from '../components/UserPlants';
import { Link } from "react-router-dom";


export default class UsersContainer extends React.Component {
    render() {
        return (
           <div>
             <ul>
               <li>
                 <Link to="/profile/plants">Your Plants</Link>
               </li>
               <li>
                 <Link to="/profile/collections">Your Collections</Link>
               </li>
             </ul>
           
           <LogoutButton />
           </div>
        )
    }
}