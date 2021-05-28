import React from 'react';

import pink from '@material-ui/core/colors/pink';
import teal from '@material-ui/core/colors/teal';
import SendIcon from '@material-ui/icons/Send';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

export default class CollectionInput extends React.Component {
    state = {
        name: ""
    }

    handleChange = (e) => {
        this.setState({
          name: e.target.value
        })
    }

    onSubmit = (e) => {
        e.preventDefault();
        this.props.handleSubmit(this.state);
        this.setState({
            name: ""
         })
    }


    render() {
        return (
            <form style={{ backgroundColor: teal[900], color: pink[100], padding: '15px', width:'35%', margin:'auto', marginTop:'100px'}} >
                <Grid
                container
                direction="row"
                justify="space-evenly"
                alignItems="flex-end"
                xl
                >
                  <Typography>
                     <label>Collection Name: </label>
                     <input type="text" placeholder="Name" name="name" value={this.state.name} onChange={this.handleChange}/>
                  </Typography>
                 <SendIcon  onClick={(e) => this.onSubmit(e)}/>
                </Grid>
           </form>
        )
    }
}