import React, { createContext, useMemo, useState } from 'react';
import { createTheme, ThemeProvider } from '@mui/material';

export const ColorModeContext = createContext({
    toggleColorMode: () => { },
    mode: 'light',
})

const themesObject = {
    dark: {
        divider: "#4A61CE",
        background: {
            default: "#11193F",
            paper: "#26388D",
        },
        text: {
            primary: "#F6F6F7",
            secondary: "#747A99",
        },
    },
    light: {
        divider: "#747A99",
        background: {
            default: "#FFFFFF",
            paper: "#F6F6F7",
        },
        text: {
            primary: "#26388D",
            secondary: "#4A61CE",
        },
    },
}

export const ColorContextProvider = ({ children }) => {
    const [mode, setMode] = useState('light');

    const colorMode = useMemo(() => ({
        toggleColorMode: () => setMode(prevMode => prevMode === 'light' ? 'dark' : 'light'),
        mode,
    }), [mode])

    const theme = useMemo(() => createTheme({
        palette: {
            mode: mode,
            ...themesObject[mode]
        },
    }), [mode])

    return (
        <ColorModeContext.Provider value={colorMode}>
            <ThemeProvider theme={theme}>
                {children}
            </ThemeProvider>
        </ColorModeContext.Provider>
    )
}