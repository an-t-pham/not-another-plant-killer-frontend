import React, { useEffect, useState }  from 'react';

import pink from '@material-ui/core/colors/pink';
import teal from '@material-ui/core/colors/teal';
import SendIcon from '@material-ui/icons/Send';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

// export default class CollectionInput extends React.Component {
export const CollectionInput = (props) => {
    // componentDidMount() { 
    //     this.props.collection && (
    //         this.setState({
    //             name: this.props.collection.attributes.name,
    //         })
    //     )
    // }

    const [name, setName] = React.useState("");

    useEffect(() => {
       props.collection && setName(props.collection.attributes.name)
      }, [])


    // handleChange = (e) => {
    //     this.setState({
    //       name: e.target.value
    //     })
    // }

    const onSubmit = (e) => {
        e.preventDefault();
        props.handleSubmit(name);
        this.setName("");
    }
    const handleChange = (event) => {
        setName(event.currentTarget);
      };
   



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
                     <input type="text" placeholder="Name" name="name" value={this.state.name} onChange={handleChange}/>
                  </Typography>
                 <SendIcon  onClick={(e) => onSubmit(e)}/>
                </Grid>
           </form>
        )
    
}