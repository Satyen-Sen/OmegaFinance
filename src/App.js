// import React from 'react';
// import { Route, Routes } from 'react-router-dom';
// import Home from './pages/Home';

// function App() {
//     return (
//         <Routes>
//             <Route path='/' element={<Home />} />
//             <Route path='/advisor' element={<h1>Advisor Page</h1>} />
//             <Route path='/investor' element={<h1>Advisor Page</h1>} />
//             <Route path='*' element={<h1>Error 404 | Page not Found </h1>} />
//         </Routes>
//     );
// }
// export default App;


import React, { useContext } from 'react';
import { Box, IconButton } from '@mui/material';
import { ColorModeContext } from './context';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';

function App() {

    const { mode, toggleColorMode } = useContext(ColorModeContext);

    return (
        <Box
            sx={{
                display: 'flex',
                width: '100%',
                alignItems: 'center',
                justifyContent: 'center',
                bgcolor: 'background.default',
                color: 'text.primary',
                borderRadius: 1,
                p: 3,
            }}
        >
            {mode} mode
            <IconButton sx={{ ml: 1 }} onClick={toggleColorMode} color='inherit'>
                {mode === 'dark' ? <DarkModeIcon /> : <LightModeIcon />}
            </IconButton>
        </Box>
    );
}

export default App;