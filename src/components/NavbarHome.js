import React from 'react';
import { AppBar, Box, useTheme } from '@mui/material';
import logo from '../assets/logo/logoShort.png';
import AccountMenu from './AccountMenu';

export default function Navbar() {

    const theme = useTheme();

    return (
        <AppBar position='sticky' sx={{ py: 2, backgroundColor: theme.palette.background.default, boxShadow: 3 }}>
            <Box className='customMargin' sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <img src={logo} alt='Omega Finance Logo' width={80} height={40} />
                <AccountMenu />
            </Box>
        </AppBar >
    );
}