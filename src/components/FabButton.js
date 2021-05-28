import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AddIcon from '@material-ui/icons/Add';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';

import Fab from '@material-ui/core/Fab';
import Tooltip from '@material-ui/core/Tooltip';
import pink from '@material-ui/core/colors/pink';
import teal from '@material-ui/core/colors/teal';



// const useStyles = makeStyles({
//     root: {
//       position: 'fixed',
//       top: '50px',
//       right: '100px'
//     }
// });

const FabButton = ({title, button, handleAction}) => {
     let icon;
     switch(button) {
         case 'add':
            icon = <AddIcon onClick={handleAction} />;
            break;

         case 'edit':
            icon = <EditIcon onClick={handleAction} />; 
            break;
        
         case 'delete':
            icon = <DeleteIcon onClick={handleAction} />; 
            break;
     }

     return (
        <Tooltip title={title} aria-label={button}>
            <Fab style={{ backgroundColor: pink[100], color: teal[900]}}>
               {icon}
            </Fab>
        </Tooltip>
      )
    
}
export default FabButton;
