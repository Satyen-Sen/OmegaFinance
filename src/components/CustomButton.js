import React from 'react';
import { Button, useTheme } from '@mui/material';

function CustomButton(props) {

    const theme = useTheme();

    return (
        <Button variant='contained' sx={{
            width: 160,
            height: 40,
            fontFamily: 'Inter',
            fontSize: 18,
            textTransform: 'none',
            backgroundColor: theme.palette.text.primary,
            '&:hover': {
                backgroundColor: theme.palette.text.secondary,
            }
        }}>
            {props.title}
        </Button>
    );
};

export default CustomButton;