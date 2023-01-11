import * as React from 'react';
import { Card, CardHeader, CardContent, Avatar, Rating, Box, Typography, useTheme } from '@mui/material';
import userReviews from '../data/userReviews.json';
import CustomHeading from './CustomHeading';
import CustomDescription from './CustomDescription';
// Swiper
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Keyboard, Pagination, Navigation } from "swiper";

const description = 'We help you see the world differently, discover opportunities you may never have imagined and achieve results that bridge what is with what can be.'

function TestimonialsCard(props) {
    const theme = useTheme();
    return (
        <Card sx={{ borderRadius: 2, boxShadow: 5, m: 6, backgroundColor: theme.palette.background.default }}>
            <CardHeader
                avatar={<Avatar src={props.avatar} sx={{ width: 60, height: 60, }} />}
                subheader={<Rating defaultValue={props.rating} size="large" readOnly />}
            />
            <CardContent>
                <Box>
                    <Typography variant="body" sx={{ color: theme.palette.text.secondary, fontFamily: 'Inter' }}>
                        It is a great platform for investment. Interactive and clean User Interface. Features like creating your own portfolio are great..I started investing in Mutual Funds.
                    </Typography>
                </Box>
                <Box sx={{ mt: 3 }}>
                    <Typography variant="h7" sx={{ fontWeight: 700 }}>{props.title}</Typography>
                </Box>
                <Box>
                    <Typography variant="body" sx={{ fontSize: 14 }}>{props.position}</Typography>
                </Box>
            </CardContent>
        </Card>
    );
};

export default function Testimonials() {
    const theme = useTheme();
    return (
        <Box sx={{ backgroundColor: theme.palette.background.default, py: 8 }}>
            <Box className='customMargin'>
                <Box sx={{ width: '50%' }}>
                    <CustomHeading content='What People Say About Us' />
                    <CustomDescription content={description} />
                </Box>
            </Box>

            <Box sx={{ width: 1190, m: 'auto', display: 'flex', justifyContent: 'center' }}>
                <Swiper slidesPerView={3} spaceBetween={-40} slidesPerGroup={3} loop={true} keyboard={{ enabled: true, }} loopFillGroupWithBlank={true} pagination={{ clickable: true, }} navigation={true} modules={[Autoplay, Keyboard, Pagination, Navigation]}>
                    {userReviews.map((userReviews) => (
                        <SwiperSlide>
                            <TestimonialsCard key={userReviews.title} avatar={userReviews.avatar} title={userReviews.title} rating={userReviews.rating} position={userReviews.position} />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </Box>
        </Box>
    );
};