import React from 'react';
import { Box } from '@mui/material';
import Navbar from '../components/Navbar';
import SplashScreen from '../components/SplashScreen';
import Testimonials from '../components/Testimonials';
import Advisors from '../components/Advisors';
import Footer from '../components/Footer';

function Home() {
    return (
        <Box>
            <Navbar />
            <SplashScreen />
            <Advisors />
            <Testimonials />
            <Footer />
        </Box>
    );
}

export default Home;