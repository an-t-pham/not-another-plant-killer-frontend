import React, { useEffect} from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { fetchUser } from "../actions/fetchUser"; 
import { connect } from "react-redux";


const Profile = (props) => {
  const { user, isAuthenticated } = useAuth0();
 
  useEffect(() => {
    if (user && !props.user) {
      props.fetchUser({
        name: user.name,
        email: user.email
      });
    }
  }, [user, props.user])

  if (!props.user) return null; 
   
  return (
    
    isAuthenticated && props.user && (
      <div>
        <img src={user.picture} alt={user.name} />
        <h2>{props.user.attributes.name}</h2>
        <p>{props.user.attributes.email}</p>
      </div>
    )
  );
};

const mapStateToProps = state => {
  return {
    user: state.users
  }
}

export default connect(mapStateToProps, { fetchUser })(Profile);