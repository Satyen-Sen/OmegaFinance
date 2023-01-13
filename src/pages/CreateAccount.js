import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Box, Grid, FormControl, InputLabel, TextField, OutlinedInput, InputAdornment, Typography, Divider, Stack, Button, IconButton, useTheme, Chip } from '@mui/material';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import FacebookIcon from '@mui/icons-material/Facebook';
import GoogleIcon from '@mui/icons-material/Google';
import TwitterIcon from '@mui/icons-material/Twitter';
import CustomHeading from '../components/CustomHeading';
import CustomButton from '../components/CustomButton';
import logo from '../assets/logo/logoShort.png';
import { Player } from '@lottiefiles/react-lottie-player';
import ThemeToggleButton from '../context/ThemeToggleButton';

export default function LoginPage() {
    const theme = useTheme();
    const [showPassword, setShowPassword] = useState(false);
    const handleClickShowPassword = () => setShowPassword((show) => !show);
    const handleMouseDownPassword = (event) => { event.preventDefault() };

    return (
        <Box sx={{ width: '100%', minHeight: '100%', backgroundColor: theme.palette.background.default }}>
            <Box className='customMargin' sx={{ pt: 4 }}>
                <Box sx={{ display: 'flex', justifyContent: 'end' }}>
                    <ThemeToggleButton />
                </Box>
                <Grid container spacing={2}>
                    <Grid item xs={6}>
                        <Box sx={{ mt: 4 }}>
                            <img src={logo} alt='Omega Finance Logo' width={160} height={80} />
                            <Box sx={{ mt: 2 }}>
                                <Player autoplay loop src='https://assets2.lottiefiles.com/packages/lf20_mjlh3hcy.json' style={{ height: '400px', width: '400px' }}></Player>
                            </Box>
                        </Box>
                    </Grid>
                    <Grid item xs={6}>
                        <Box sx={{ width: 450, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                            <CustomHeading content='Create an Acccount' />

                            <Stack spacing={2}>
                                <Stack direction="row" spacing={2}>
                                    <TextField label="First Name" variant="outlined" />
                                    <TextField label="Last Name" variant="outlined" />
                                </Stack>

                                <FormControl variant="outlined">
                                    <InputLabel>Email</InputLabel>
                                    <OutlinedInput label="Email" />
                                </FormControl>

                                <FormControl variant="outlined">
                                    <InputLabel>Password</InputLabel>
                                    <OutlinedInput label="Password"
                                        type={showPassword ? 'text' : 'password'}
                                        endAdornment={
                                            <InputAdornment position="end">
                                                <IconButton
                                                    onClick={handleClickShowPassword}
                                                    onMouseDown={handleMouseDownPassword}
                                                    edge="end"
                                                >
                                                    {showPassword ? <VisibilityOff /> : <Visibility />}
                                                </IconButton>
                                            </InputAdornment>
                                        }
                                    />
                                </FormControl>
                            </Stack>

                            <Box sx={{ mt: 4 }}>
                                <Link to='/login'>
                                    <CustomButton title='Register' />
                                </Link>
                            </Box>

                            <Box sx={{ width: "100%", my: 4, fontWeight: 500, display: 'flex', justifyContent: 'space-between' }}>
                                <Link to='/login'>
                                    <Typography variant='body' sx={{ color: theme.palette.text.secondary, '&:hover': { color: theme.palette.text.primary } }}>
                                        Already having an account?
                                    </Typography>
                                </Link>
                            </Box>

                            <Divider variant="middle" sx={{ mb: '9px', width: '100%', color: theme.palette.text.secondary }}>
                                <Chip label="OR" />
                            </Divider>

                            <Stack direction="row" spacing={2} sx={{ mt: 4, mb: 8 }}>
                                <Button fullWidth size="large" variant="outlined">
                                    <FacebookIcon sx={{ color: '#1877F2' }} />
                                </Button>
                                <Button fullWidth size="large" variant="outlined">
                                    <GoogleIcon sx={{ color: '#DF3E30' }} />
                                </Button>
                                <Button fullWidth size="large" variant="outlined">
                                    <TwitterIcon sx={{ color: '#1C9CEA' }} />
                                </Button>
                            </Stack>
                        </Box>
                    </Grid>
                </Grid>
            </Box>
        </Box >
    );
}
