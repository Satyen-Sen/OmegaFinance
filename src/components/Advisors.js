import * as React from 'react';
import { Avatar, Button, Card, CardHeader, CardContent, Box, Grid, Typography, useTheme } from '@mui/material';
import { styled } from '@mui/material/styles';
import VerifiedIcon from '@mui/icons-material/Verified';
import stockAdvisors from '../data/stockAdvisors.json';
import consultations from '../data/consultations.json';
import CustomHeading from './CustomHeading';
import CustomDescription from './CustomDescription';
// Swiper
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Keyboard, Pagination, Navigation } from "swiper";

const description1 = 'We at Omega Finance Group, focus on providing the best financial planning services to our clients.';
const description2 = 'Get Insights and helpful suggestions from our premium and verified investment advisors for effective portfolio management and financial planning.';
const description3 = 'Get assistant from our team of premium, verified & experienced consultants available 24x7 at your service via chat, email or call.';

function AdvisorCard(props) {

    const theme = useTheme();

    const CustomButton = styled(Button)({
        textTransform: 'none', fontSize: 11, fontFamily: 'Inter', borderRadius: 20, width: 98, backgroundColor: theme.palette.text.primary, '&:hover': { backgroundColor: theme.palette.text.secondary }
    });

    return (
        <Card sx={{ borderRadius: 6, m: 6, boxShadow: 5, width: 340 }}>
            <CardHeader
                avatar={<Avatar src={props.avatar} sx={{ width: 90, height: 120, borderRadius: 4, }} />}
                title={<Typography variant="h5" color={theme.palette.text.primary} sx={{ mb: 1, ml: 1, fontWeight: 700, }}>{props.title}</Typography>}
                subheader={
                    <Grid container spacing={1}>
                        <Grid item xs={6}>
                            <CustomButton variant="contained">{props.year} Years Exp</CustomButton>
                        </Grid>
                        <Grid item xs={6}>
                            <CustomButton variant="contained">{props.client}+ Clients</CustomButton>
                        </Grid>
                        <Grid item xs={6}>
                            <CustomButton variant="contained" startIcon={<VerifiedIcon sx={{ color: theme.palette.text.disabled }} />}>Verified</CustomButton>
                        </Grid>
                        <Grid item xs={6}>
                            <CustomButton variant="contained">{props.rating}+ Rating</CustomButton>
                        </Grid>
                    </Grid>
                }
            />
            <CardContent sx={{ p: 2 }}>
                <Typography variant="h6" sx={{ fontFamily: 'Inter', color: theme.palette.text.primary, fontWeight: 600 }}>
                    About {props.type}
                </Typography>
                <Typography variant="body" sx={{ mt: 2, fontFamily: 'Inter', color: theme.palette.text.secondary, fontSize: 14 }}>
                    {description1}
                </Typography>
            </CardContent>
        </Card>
    );
};


function Advisors() {
    const theme = useTheme();

    return (
        <Box sx={{ backgroundColor: theme.palette.background.paper, py: 8 }}>
            <Box className='customMargin'>
                <Box sx={{ width: '50%' }}>
                    <CustomHeading content='Premium Advisors' />
                    <CustomDescription content={description2} />
                </Box>
            </Box>

            <Box sx={{ width: 1200, m: 'auto', display: 'flex', justifyContent: 'center' }}>
                <Swiper slidesPerView={3} slidesPerGroup={3} spaceBetween={-46} loop={true} keyboard={{ enabled: true, }} loopFillGroupWithBlank={true} pagination={{ clickable: true, }} navigation={true} modules={[Autoplay, Keyboard, Pagination, Navigation]}>
                    {stockAdvisors.map(item => {
                        return (
                            <SwiperSlide>
                                <AdvisorCard key={item.id} type='Advisor' avatar={item.avatar} title={item.title} year={item.year} client={item.client} rating={item.rating} />
                            </SwiperSlide>
                        );
                    })}
                </Swiper>
            </Box>

            <Box className='customMargin'>
                <Box sx={{ width: '50%', mt: 12 }}>
                    <CustomHeading content='Premium Consultants' />
                    <CustomDescription content={description3} />
                </Box>
            </Box>

            <Box sx={{ width: 1200, m: 'auto', display: 'flex', justifyContent: 'center' }}>
                <Swiper slidesPerView={3} slidesPerGroup={3} spaceBetween={-46} loop={true} keyboard={{ enabled: true, }} loopFillGroupWithBlank={true} pagination={{ clickable: true, }} navigation={true} modules={[Autoplay, Keyboard, Pagination, Navigation]}>
                    {consultations.map(item => {
                        return (
                            <SwiperSlide>
                                <AdvisorCard key={item.id} type='Consulatant' avatar={item.avatar} title={item.title} year={item.year} client={item.client} rating={item.rating} />
                            </SwiperSlide>
                        );
                    })}
                </Swiper>
            </Box>

        </Box>
    )
}

export default Advisors