import React from 'react';
import { Box, useTheme } from '@mui/material';
import NavbarHome from '../components/NavbarHome';

function Home() {
    const theme = useTheme();
    return (
        <Box sx={{ backgroundColor: theme.palette.background.default, height: 1000 }}>
            <NavbarHome />
        </Box>
    );
}

export default Home;