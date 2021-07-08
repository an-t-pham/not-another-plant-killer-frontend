import React, { useState, useCallback } from 'react';

const useForm = () => {
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);

    const handleOpen = useCallback((event) => {
        setAnchorEl(event.currentTarget);
      }, [setAnchorEl]);
    
      const handleClose = useCallback(() => {
        setAnchorEl(null);
      }, [setAnchorEl]);

}

export default useForm;