import React from 'react';
import AddIcon from '@material-ui/icons/Add';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';

import Fab from '@material-ui/core/Fab';
import Tooltip from '@material-ui/core/Tooltip';
import pink from '@material-ui/core/colors/pink';
import teal from '@material-ui/core/colors/teal';

import useForm from '../hooks/useForm';




const FabButton = ({title, button}) => {
     const { handleOpen } = useForm();
     let icon;
     switch(button) {
         case 'add':
            icon = <AddIcon onClick={handleOpen} />;
            break;

         case 'edit':
            icon = <EditIcon onClick={handleOpen} />; 
            break;
        
         case 'delete':
            icon = <DeleteIcon onClick={handleOpen} />; 
            break;
         
         default:
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
