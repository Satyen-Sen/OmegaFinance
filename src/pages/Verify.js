import { useState } from 'react';
import { MuiOtpInput } from "mui-one-time-password-input";
import { Link } from 'react-router-dom';
import { Box, Stack, Grid, FormControl, InputLabel, OutlinedInput, InputAdornment, Typography, Button, IconButton, useTheme } from '@mui/material';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import CustomHeading from '../components/CustomHeading';
import CustomDescription from '../components/CustomDescription';
import CustomButton from '../components/CustomButton';
import { Player } from '@lottiefiles/react-lottie-player';
import NavbarTransparent from '../components/NavbarTransparent';

const descriptionText = "We have sent you a 6-digit OTP code on your email. Please enter the code to verify your email."

export default function Verify() {
    const theme = useTheme();
    const [showPassword, setShowPassword] = useState(false);
    const [value, setValue] = useState("");
    const handleClickShowPassword = () => setShowPassword((show) => !show);
    const handleMouseDownPassword = (event) => { event.preventDefault() };
    const handleChange = (newValue) => {setValue(newValue)};
    const handleComplete = (finalValue) => {console.log(finalValue)};

    return (
        <Box sx={{ width: '100%', height: 1000, backgroundColor: theme.palette.background.default }}>
            <Box className='customMargin'>
                <NavbarTransparent />
                <Grid container spacing={2}>
                    <Grid item xs={6}>
                        <Box sx={{ mt: 6 }}>
                            <Player autoplay loop src='https://assets10.lottiefiles.com/packages/lf20_t6nmtpwm.json' style={{ height: '400px', width: '400px' }}></Player>
                        </Box>
                    </Grid>
                    <Grid item xs={6}>
                        <Box sx={{ width: 450, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                            <CustomHeading content='Enter OTP' />
                            <CustomDescription content={descriptionText} />

                            <Stack spacing={4}>
                                
                                <MuiOtpInput length={6} onComplete={handleComplete} value={value} onChange={handleChange}/>

                                <FormControl variant="outlined" sx={{width:'100%'}}>
                                    <InputLabel>New Password</InputLabel>
                                    <OutlinedInput label="New Password"
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
                                    <CustomButton title='Submit' />
                                </Link>
                            </Box>

                            <Box sx={{ width: "100%", my: 2, fontWeight: 500, display: 'flex', justifyContent: 'space-between' }}>
                                <Button type='text' sx={{ textTransform: 'none', }}>
                                    <Typography variant='body' sx={{ color: theme.palette.text.secondary, '&:hover': { color: theme.palette.text.primary } }}>
                                        Resend OTP?
                                    </Typography>
                                </Button>
                                <Link to='/login'>
                                    <Button type='text' sx={{ textTransform: 'none', }}>
                                        <Typography variant='body' sx={{ color: theme.palette.text.secondary, '&:hover': { color: theme.palette.text.primary } }}>
                                            Return to Sign In
                                        </Typography>
                                    </Button>
                                </Link>
                            </Box>
                        </Box>
                    </Grid>
                </Grid>
            </Box>
        </Box >
    );
}
