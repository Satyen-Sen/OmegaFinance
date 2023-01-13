import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { Avatar, Menu, MenuItem, ListItemIcon, Button, IconButton, useTheme } from '@mui/material'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Settings from '@mui/icons-material/Settings';
import Logout from '@mui/icons-material/Logout';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import { ColorModeContext } from '../context';

export default function AccountMenu() {

    const { mode, toggleColorMode } = useContext(ColorModeContext);
    const theme = useTheme();

    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => { setAnchorEl(event.currentTarget) };
    const handleClose = () => { setAnchorEl(null) };

    return (
        <>
            <IconButton onClick={handleClick} sx={{ m: 0, p: 0 }}>
                <Avatar alt="Profile Picture" src="https://media.istockphoto.com/id/1288538088/photo/portrait-young-confident-smart-asian-businessman-look-at-camera-and-smile.jpg?s=612x612&w=0&k=20&c=qkOwVHZFC-fbtbTnufVGaXFhnQBcfEjzbu5ThSXVLR0=" />
            </IconButton>

            <Menu anchorEl={anchorEl} open={open} onClose={handleClose} onClick={handleClose} transformOrigin={{ horizontal: 'right', vertical: 'top' }} anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}>
                <Link to='/account'>
                    <MenuItem sx={{ color: theme.palette.text.primary, fontweight: 500 }}>
                        <ListItemIcon>
                            <AccountCircleIcon fontSize="medium" sx={{ color: theme.palette.text.primary }} />
                        </ListItemIcon>
                        My Account
                    </MenuItem>
                </Link>
                <Button onClick={toggleColorMode} sx={{ color: theme.palette.text.primary, m: 0, p: 0, textTransform: 'none' }}>
                    <MenuItem>
                        <ListItemIcon sx={{ color: theme.palette.text.primary }}>
                            {mode === 'dark' ? <DarkModeIcon /> : <LightModeIcon />}
                        </ListItemIcon>
                        Toggle Theme
                    </MenuItem>
                </Button>

                <Link to='/settings'>
                    <MenuItem sx={{ color: theme.palette.text.primary }}>
                        <ListItemIcon>
                            <Settings fontSize="medium" sx={{ color: theme.palette.text.primary }} />
                        </ListItemIcon>
                        Settings
                    </MenuItem>
                </Link>

                <Link to='/'>
                    <MenuItem sx={{ color: theme.palette.text.primary }}>
                        <ListItemIcon>
                            <Logout fontSize="medium" sx={{ color: theme.palette.text.primary }} />
                        </ListItemIcon>
                        Logout
                    </MenuItem>
                </Link>
            </Menu>
        </>
    );
}