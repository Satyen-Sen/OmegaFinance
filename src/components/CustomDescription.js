import React from 'react'
import { Typography, useTheme } from '@mui/material'

function CustomDescription(props) {

    const theme = useTheme();

    return (
        <Typography sx={{ color: theme.palette.text.secondary, fontFamily: 'Inter', fontSize: 16, fontWeight: 500, my: 4 }}>
            {props.content}
        </Typography>

    )
}

export default CustomDescription