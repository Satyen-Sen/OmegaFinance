import React from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Box, Stack, useTheme } from '@mui/material';
import CustomButton from './CustomButton';
import logo from '../assets/logo/logoShort.png';
import ThemeToggleButton from '../context/ThemeToggleButton';

function LinkButtons() {
    return (
        <Stack direction='row' spacing={4}>
            <Link to='/register'><CustomButton title='Register' /></Link>
            <Link to='/login'><CustomButton title='Login' /></Link>
            <ThemeToggleButton />
        </Stack>
    )
}

export default function Navbar() {
    const theme = useTheme();
    return (
        <AppBar position='sticky' sx={{ py: 2, backgroundColor: theme.palette.background.default, boxShadow: 3 }}>
            <Box className='customMargin' sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <img src={logo} alt='Omega Finance Logo' width={80} height={40} />
                <LinkButtons />
            </Box>
        </AppBar >
    );
}