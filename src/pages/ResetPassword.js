import { Link } from 'react-router-dom';
import { Box, Grid, TextField, Typography, useTheme } from '@mui/material';
import NavbarTransparent from '../components/NavbarTransparent';
import CustomHeading from '../components/CustomHeading';
import CustomDescription from '../components/CustomDescription';
import CustomButton from '../components/CustomButton';
import { Player } from '@lottiefiles/react-lottie-player';

const descriptionText = 'Please enter the email address associated with your account and we will send you an OTP to reset your password.';

export default function ResetPassword() {

    const theme = useTheme();

    return (
        <Box sx={{ width: '100%', height: 1000, backgroundColor: theme.palette.background.default }}>
            <Box className='customMargin'>
                <NavbarTransparent />
                <Grid container spacing={2}>
                    <Grid item xs={6}>
                        <Box sx={{ mt: 6 }}>
                            <Player autoplay loop src='https://assets7.lottiefiles.com/packages/lf20_z3pnisgt.json' style={{ height: '400px', width: '400px' }}></Player>
                        </Box>
                    </Grid>
                    <Grid item xs={6}>
                        <Box sx={{ width: 450, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                            <CustomHeading content='Forgot your password?' />

                            <Box sx={{ width: 400, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                                <CustomDescription content={descriptionText} />
                                <TextField label="Email" variant="outlined" sx={{ width: '100%' }} />
                            </Box>

                            <Box sx={{ mt: 6 }}>
                                <Link to='/verify'>
                                    <CustomButton title='Send OTP' />
                                </Link>
                            </Box>

                            <Box sx={{ width: "100%", my: 4, fontWeight: 500, display: 'flex', justifyContent: 'space-between' }}>
                                <Link to='/register'>
                                    <Typography variant='body' sx={{ color: theme.palette.text.secondary, '&:hover': { color: theme.palette.text.primary } }}>
                                        Create an Account
                                    </Typography>
                                </Link>
                                <Link to='/login'>
                                    <Typography variant='body' sx={{ color: theme.palette.text.secondary, '&:hover': { color: theme.palette.text.primary } }}>
                                        Return to Sign In
                                    </Typography>
                                </Link>
                            </Box>
                        </Box>
                    </Grid>
                </Grid>
            </Box>
        </Box >
    );
}
