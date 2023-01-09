import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';

function App() {

    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/advisor' element={<h1>Advisor Page</h1>} />
                <Route path='/investor' element={<h1>Investor Page</h1>} />
                <Route path='*' element={<h1>Error 404 | Page not Found </h1>} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;