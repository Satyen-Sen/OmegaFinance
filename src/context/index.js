import React, { createContext, useMemo, useState } from 'react';
import { createTheme, ThemeProvider } from '@mui/material';
import { customThemes } from './CustomThemes';

export const ColorModeContext = createContext({
    toggleColorMode: () => { },
    mode: 'light',
})

export const ColorContextProvider = ({ children }) => {
    const [mode, setMode] = useState('light');

    const colorMode = useMemo(() => ({
        toggleColorMode: () => setMode(prevMode => prevMode === 'light' ? 'dark' : 'light'),
        mode,
    }), [mode])

    const theme = useMemo(() => createTheme({
        palette: {
            mode: mode,
            ...customThemes[mode]
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