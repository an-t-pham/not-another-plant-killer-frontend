import React, { useEffect, useState }  from 'react';

import pink from '@material-ui/core/colors/pink';
import teal from '@material-ui/core/colors/teal';
import SendIcon from '@material-ui/icons/Send';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

const CollectionInput = (props) => {

    const [name, setName] = useState("");

    useEffect(() => {
       props.collection && setName(props.collection.attributes.name)
      }, [props.collection])


    const onSubmit = (e) => {
        e.preventDefault();
        props.handleSubmit({name});
        setName("");
    }
    const handleChange = (event) => {
        setName(event.currentTarget.value);
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
                     <input type="text" placeholder="Name" name="name" value={name} onChange={handleChange}/>
                  </Typography>
                 <SendIcon  onClick={(e) => onSubmit(e)}/>
                </Grid>
           </form>
        )
    
}

export default CollectionInput;