import React, { useContext } from 'react';
import { Box, IconButton, useTheme } from '@mui/material';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import { ColorModeContext } from '.';

export default function ThemeToggleButton() {

    const { mode, toggleColorMode } = useContext(ColorModeContext);
    const theme = useTheme();

    return (
        <Box sx={{ border: 2, borderRadius: 20, borderColor: theme.palette.text.primary }}>
            <IconButton onClick={toggleColorMode} sx={{ color: theme.palette.text.primary }}>
                {mode === 'dark' ? <DarkModeIcon /> : <LightModeIcon />}
            </IconButton>
        </Box>
    )
}