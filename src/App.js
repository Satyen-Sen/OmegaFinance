import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import LandingPage from './pages/LandingPage';
import LoginPage from './pages/LoginPage';
import CreateAccount from './pages/CreateAccount';

function App() {

    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<LandingPage />} />
                <Route path='/login' element={<LoginPage />} />
                <Route path='/register' element={<CreateAccount />} />
                <Route path='/home' element={<Home />} />
                <Route path='*' element={<h1>Error 404 | Page not Found </h1>} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;