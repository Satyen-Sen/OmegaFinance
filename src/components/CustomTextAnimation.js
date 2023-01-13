import React, { useState, useEffect } from "react";
import TextTransition, { presets } from "react-text-transition";
import { Typography, useTheme } from '@mui/material';

const investmentArray = [
    "Stock Market",
    "Mutual Funds",
    "Cryto Currencies",
    "Digital Gold",
    "Government Bonds",
];

function CustomTextAnimation() {
    const theme = useTheme();
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(
            () => setIndex((index) => index + 1),
            2500 // every 2.5 seconds
        );
        return () => clearTimeout(intervalId);
    }, []);

    return (
        <Typography variant='body' sx={{ color: theme.palette.text.disabled, fontSize: 26, fontWeight: 700, }}>
            <TextTransition springConfig={presets.wobbly}>
                {investmentArray[index % investmentArray.length]}
            </TextTransition>
        </Typography>
    );
};

export default CustomTextAnimation;
