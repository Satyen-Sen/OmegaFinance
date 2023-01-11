import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Box, IconButton, Stack, useTheme } from '@mui/material';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import { ColorModeContext } from '../context';
import CustomButton from './CustomButton';
import logo from '../assets/logo/logoShort.png';

export default function Navbar() {

    const { mode, toggleColorMode } = useContext(ColorModeContext);
    const theme = useTheme();

    return (
        <AppBar position='sticky' sx={{ py: 2, backgroundColor: theme.palette.background.default, boxShadow: 3 }}>
            <Box className='customMargin' sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <img src={logo} alt='Omega Finance Logo' width={80} height={40} />
                <Stack direction='row' spacing={4}>
                    <Link to='/register'>
                        <CustomButton title='Register' />
                    </Link>
                    <Link to='/login'>
                        <CustomButton title='Login' />
                    </Link>
                    <Box sx={{ border: 2, borderRadius: 20, borderColor: theme.palette.text.primary }}>
                        <IconButton onClick={toggleColorMode} sx={{ color: theme.palette.text.primary }}>
                            {mode === 'dark' ? <DarkModeIcon /> : <LightModeIcon />}
                        </IconButton>
                    </Box>
                </Stack>
            </Box>
        </AppBar >
    );
}