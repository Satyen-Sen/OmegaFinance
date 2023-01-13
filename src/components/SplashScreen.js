import React from 'react';
import { Box, Grid, useTheme } from '@mui/material';
import { Player } from '@lottiefiles/react-lottie-player';
import CustomHeading from './CustomHeading';
import CustomDescription from './CustomDescription';
import CustomButton from './CustomButton';
import CustomTextAnimation from './CustomTextAnimation';

function SplashScreen() {

    const theme = useTheme();

    const description1 = 'Omega Finance Group is an expert stock market trading and coaching institution with a proven track record in offering highly effective stock market trading ideas & financial planning services to a broad spectrum of clients. We have offered numerous clients recommendations and ideas that helped bag millions.';
    const description2 = 'We help you see the world differently, discover opportunities you may never have imagined and achieve results that bridge what is with what can be.';

    return (
        <Box sx={{ width: '100%', backgroundColor: theme.palette.background.default }}>
            <Box className='customMargin' sx={{ py: 14 }}>
                <Grid container spacing={2}>
                    <Grid item xs={6}>
                        <CustomHeading content='Welcome to Omega Finance' />
                        <CustomDescription content={description1} />
                        <CustomButton title='Explore More' />
                    </Grid>

                    <Grid item xs={6}>
                        <Player autoplay loop src='https://assets3.lottiefiles.com/packages/lf20_kuhijlvx.json' style={{ height: '400px', width: '400px' }}></Player>
                    </Grid>
                </Grid>

                <Grid container spacing={2}>
                    <Grid item xs={6}>
                        <Player autoplay loop src='https://assets5.lottiefiles.com/private_files/lf30_tcuqw7ib.json' style={{ height: '400px', width: '400px' }}></Player>
                    </Grid>

                    <Grid item xs={6} sx={{ mt: 8 }}>
                        <CustomHeading content='Learn & Invest in' />
                        <CustomTextAnimation />
                        <CustomDescription content={description2} />
                        <CustomButton title='Contact Us' />
                    </Grid>
                </Grid>
            </Box>
        </Box>
    );
};

export default SplashScreen;