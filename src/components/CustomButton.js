import React, { useContext } from 'react';
import { Button } from '@mui/material';
import { ColorModeContext } from '../context';

function CustomButton(props) {
    const { mode } = useContext(ColorModeContext);

    return (
        <Button variant='contained' sx={{
            width: 160,
            height: 40,
            fontFamily: 'Inter',
            fontSize: 18,
            textTransform: 'none',
            backgroundColor: mode === 'dark' ? '#F6F6F7' : '#11193F',
            '&:hover': {
                backgroundColor: mode === 'dark' ? '#BCBCC3' : '#4C5067',
            }
        }}>
            {props.title}
        </Button>
    );
};

export default CustomButton;