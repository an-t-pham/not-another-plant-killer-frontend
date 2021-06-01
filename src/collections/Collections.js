import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import pink from '@material-ui/core/colors/pink';
import teal from '@material-ui/core/colors/teal';
import Typography from '@material-ui/core/Typography';


const Collections = ( {collections} ) => {
    const image = (collection) => {
        if (collection.attributes.plants.length > 0) {
            return collection.attributes.plants[0].image_url
        } 
    }

    const alt1 = (collection) => {
        if (collection.attributes.plants.length > 0) {
            return collection.attributes.plants[0].name
        } else {
            return ""
        }
    }

    const text = <Typography variant="body1" style={{ color: pink[200] }}>No Collection has been created </Typography>

    return (
            <ul>
                <Typography variant="h4" style={{ color: pink[200], backgroundColor: teal[800], padding: '20px' }}>My Collections</Typography>
                {collections.length > 0 ? collections.map(collection => collection && (
                    <Link to={`/profile/collections/${collection.attributes.slug}`} key={collection.id} style={{ color: pink[200]}} component={RouterLink} >

                                <Grid
                                container
                                direction="row"
                                alignItems="flex-start"
                                xl
                                >
                                <Avatar src={image(collection)} alt={alt1(collection)}  style={{ padding: '5px'}}/> 
                                <div style={{ padding: '20px'}}> {collection.attributes.name} <br />  </div>
                                </Grid>
                                
                    </Link>)) : text
                } 
            </ul>
    )
}

export default Collections;