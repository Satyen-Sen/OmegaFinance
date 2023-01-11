import * as React from 'react';
import { Box, Typography, List, ListItem, useTheme, Divider } from '@mui/material';
import LogoShort from '../assets/logo/logoShort.png';
import fbIcon from '../assets/socialMedia/fbIcon.svg';
import igIcon from '../assets/socialMedia/igIcon.svg';
import ytIcon from '../assets/socialMedia/ytIcon.svg';
import twitterIcon from '../assets/socialMedia/twitterIcon.svg';
import linkedInIcon from '../assets/socialMedia/linkedInIcon.svg';
import telegramIcon from '../assets/socialMedia/telegramIcon.svg';

function Footer() {

    const theme = useTheme();

    function ListTitle(props) {
        return (
            <Typography variant='h6' sx={{ fontWeight: 500, fontFamily: 'Inter', mb: 2, color: theme.palette.text.primary }}>
                {props.title}
            </Typography>
        )
    }

    function CustomListItem(props) {
        return (
            <ListItem disablePadding sx={{ mb: 1, color: theme.palette.text.secondary, fontWeight: 500, '&:hover': { textDecoration: 'underline' } }}>
                {props.content}
            </ListItem>
        )
    }

    return (
        <Box sx={{ backgroundColor: theme.palette.background.paper, color: theme.palette.text.secondary, py: 8 }}>
            <Box className='customMargin' sx={{ display: 'flex', flexDirection: 'row' }}>
                <Box sx={{ width: 400, display: 'flex', flexDirection: 'column' }}>
                    <img src={LogoShort} alt='Omega Finance Group' width={140} height={70} />
                    <Typography variant='body' sx={{ fontWeight: 500, color: theme.palette.text.secondary, my: 3 }}>
                        215, 15<sup>th</sup> Cross Road, Rajajinagar,
                        <br />
                        Bengaluru, Karnataka - 560079.
                    </Typography>
                    <Typography variant='body' sx={{ fontWeight: 600, textDecoration: 'underline', color: theme.palette.text.primary }}>
                        Contact Us
                    </Typography>
                    <Box sx={{ mt: 1 }}>
                        <img src={fbIcon} alt='fbIcon' style={{ marginRight: 8 }} />
                        <img src={igIcon} alt='igIcon' style={{ marginRight: 8 }} />
                        <img src={ytIcon} alt='ytIcon' style={{ marginRight: 8 }} />
                        <img src={twitterIcon} alt='twitterIcon' style={{ marginRight: 8 }} />
                        <img src={linkedInIcon} alt='linkedInIcon' style={{ marginRight: 8 }} />
                        <img src={telegramIcon} alt='telegramIcon' style={{ marginRight: 8 }} />
                    </Box>
                </Box>

                <Box sx={{ width: 280 }}>
                    <ListTitle title='PRODUCTS' />
                    <List>
                        <CustomListItem content='Fixed Deposits' />
                        <CustomListItem content='Stock Market' />
                        <CustomListItem content='US Stocks' />
                        <CustomListItem content='Mutual Funds' />
                        <CustomListItem content='Government Bonds' />
                    </List>
                </Box>

                <Box sx={{ width: 300 }}>
                    <ListTitle title='OMEGA FINANCE' />
                    <List>
                        <CustomListItem content='Contact Us' />
                        <CustomListItem content='Blogs' />
                        <CustomListItem content='Pricing' />
                        <CustomListItem content='Privacy Policy' />
                        <CustomListItem content='Help & Support' />
                        <CustomListItem content='Terms & Conditions' />
                    </List>
                </Box>

                <Box sx={{ width: 250 }}>
                    <ListTitle title='QUICK LINKS' />
                    <List>
                        <CustomListItem content='Open Demat Account' />
                        <CustomListItem content='AMC Mutual Funds' />
                        <CustomListItem content='Performance' />
                        <CustomListItem content='Glossary' />
                        <CustomListItem content='Sitemap' />
                        <CustomListItem content='Calculators' />
                    </List>
                </Box>
            </Box>

            <Divider variant="middle" sx={{ width: 1100, m: '8px auto', color: theme.palette.text.secondary }} />

            <Box className='customMargin' sx={{ display: 'flex', justifyContent: 'center' }}>
                <Typography variant='body' sx={{ fontSize: 14, color: theme.palette.text.secondary, mt: 2 }}>
                    © 2022-2023 Omega Finance Group. All right reserved, Built with 🔥 in India.
                </Typography>
            </Box>
        </Box>
    );
}

export default Footer;