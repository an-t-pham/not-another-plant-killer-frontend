import React from 'react';
import LoginButton from './LoginButton';
import background from '../images/background.jpeg';
import Container from '@material-ui/core/Container';
import { Typography } from '@material-ui/core';
import pink from '@material-ui/core/colors/pink';

export default class HomePage extends React.Component {
    render() {
        return (
            <div style={{ backgroundImage: `url(${background})`, height: "100vh", backgroundSize: 'cover', display: "flex", alignItems: "center" }}>
               <Container maxWidth={false} style={{ backgroundColor: pink[50], width: '100%', height: '200px', opacity: 0.8, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "space-evenly" }} >
                   <Typography variant="h3" style={{ color: pink[500] }} >
                     Welcome to Not Another Plant Killer!
                   </Typography>
                  <LoginButton />
      
                  </Container> 
            </div>
        )

    }
}