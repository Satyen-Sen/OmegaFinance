import React from 'react';
import { Typography, useTheme } from '@mui/material'

function CustomHeading(props) {

    const theme = useTheme();

    return (
        <Typography sx={{ fontSize: 40, color: theme.palette.text.primary, fontWeight: 500, my: 4 }}>
            {props.content}
        </Typography>

    )
}

export default CustomHeading