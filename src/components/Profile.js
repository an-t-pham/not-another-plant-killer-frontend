import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { fetchUser } from "../actions/fetchUser"; 
import { connect } from "react-redux";
import pink from '@material-ui/core/colors/pink';


const Profile = (props) => {
  const { user, isAuthenticated } = useAuth0();
 

  if (!props.user) return null; 
   
  return (
    
    isAuthenticated && props.user && (
      <div style={{ color: pink[200], paddingLeft: '40px'}}>
        <img src={user.picture} alt={user.name} />
        <h2>Hi, {props.user.attributes.name}!</h2>
        <p>Email: {props.user.attributes.email}</p>
      </div>
    )
  );
};

const mapStateToProps = state => {
  return {
    user: state.user
  }
}

export default connect(mapStateToProps, { fetchUser })(Profile);