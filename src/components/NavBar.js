import React from "react";
import { NavLink } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import LogoutButton from "./LogoutButton";
import MenuIcon from "@material-ui/icons/Menu";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import pink from "@material-ui/core/colors/pink";
export const NavBar = () => {
	const [anchorEl, setAnchorEl] = React.useState(null);

	const open = Boolean(anchorEl);

	const handleClick = (event) => {
		setAnchorEl(event.currentTarget);
	};

	const handleClose = () => {
		setAnchorEl(null);
	};

	const { isAuthenticated } = useAuth0();

	return (
		<>
			{ isAuthenticated && (
				<div>
					<MenuIcon
						aria-label='more'
						aria-controls='nav-bar'
						aria-haspopup='true'
						onClick={handleClick}
						style={{ color: pink[200], width: "40px", height: "40px" }}
					>
					</MenuIcon>
                  
					<Menu
						id='nav-bar'
						anchorEl={anchorEl}
						keepMounted
						open={open}
						onClose={handleClose}
      
					>
						<MenuItem key='profile' selected='Profile' style={{ color: pink[200] }} onClick={handleClose} component={NavLink} to='/profile'>
                         Profile
						</MenuItem>

						<MenuItem key='my-collections' selected='My Collections' style={{ color: pink[200] }} onClick={handleClose} component={NavLink} to='/profile/collections'>
                         My Collections
						</MenuItem>

						<MenuItem key='plants' selected='Plants' style={{ color: pink[200] }} onClick={handleClose} component={NavLink} to='/plants'>
                         All Plants
						</MenuItem>

						<MenuItem key='logout' selected='Log Out' onClick={handleClose} component={LogoutButton} >
                         Log Out 
						</MenuItem>
					</Menu>
				</div>

			)}
             
            
		</>
	);

      
};

