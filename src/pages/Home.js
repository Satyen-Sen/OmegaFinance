import React from 'react';
import { Box } from '@mui/material';
import Navbar from '../components/Navbar';
import SplashScreen from '../components/SplashScreen';

function Home() {
    return (
        <Box>
            <Navbar />
            <SplashScreen />
        </Box>
    );
}

export default Home;