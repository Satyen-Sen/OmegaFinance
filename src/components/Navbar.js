import React, { useContext } from 'react';
import { AppBar, Container, IconButton, Stack } from '@mui/material';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import { ColorModeContext } from '../context';
import CustomButton from './CustomButton';
import logo from '../images/logo/logoShort.png';

export default function Navbar() {
    const { mode, toggleColorMode } = useContext(ColorModeContext);

    return (
        <AppBar position='static' sx={{ py: 2, backgroundColor: mode === 'dark' ? '#11193F' : '#FFFFFF' }}>
            <Container className='marginFixed' sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <img src={logo} alt='Omega Finance Logo' width={80} height={40} />
                <Stack direction='row' spacing={4}>
                    <CustomButton title='Register' />
                    <CustomButton title='Login' />
                    <IconButton onClick={toggleColorMode} sx={{ color: mode === 'dark' ? '#F6F6F7' : '#11193F' }}>
                        {mode === 'dark' ? <DarkModeIcon /> : <LightModeIcon />}
                    </IconButton>
                </Stack>
            </Container>
        </AppBar >
    );
}