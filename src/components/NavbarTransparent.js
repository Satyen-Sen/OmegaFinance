import React from 'react';
import { AppBar, Box } from '@mui/material';
import logo from '../assets/logo/logoShort.png';
import ThemeToggleButton from '../context/ThemeToggleButton';


export default function NavbarTransparent() {
    return (
        <AppBar position='sticky' sx={{ py: 2, background: 'transparent', boxShadow: 'none' }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                <img src={logo} alt='Omega Finance Logo' width={80} height={40} />
                <ThemeToggleButton />
            </Box>
        </AppBar>
    );
}