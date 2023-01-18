import { Link } from 'react-router-dom';
import { Box, useTheme } from '@mui/material';
import { Player } from '@lottiefiles/react-lottie-player';
import CustomHeading from '../components/CustomHeading';
import CustomDescription from '../components/CustomDescription';
import CustomButton from '../components/CustomButton';
import NavbarTransparent from '../components/NavbarTransparent';

const descriptionText = 'Sorry, we couldn’t find the page you’re looking for. Perhaps you’ve mistyped the URL? Be sure to check your spelling.'

export default function Page404() {
    const theme = useTheme();
    return (
        <Box sx={{ backgroundColor: theme.palette.background.default, display: 'flex', justifyContent: 'center' }}>
            <Box className='customMargin' sx={{ textAlign: 'center', alignItems: 'center', m: 0, height: 1000 }}>
                <NavbarTransparent />

                <CustomHeading content='Sorry, page not found!' />
                <CustomDescription content={descriptionText} />

                <Box>
                    <Player autoplay loop src='https://assets1.lottiefiles.com/packages/lf20_q2pevjuc.json' style={{ height: '300px', width: '400px' }}></Player>
                </Box>

                <Box>
                    <Link to='/'><CustomButton title='Go to Home' /></Link>
                </Box>
            </Box>
        </Box>
    );
}
