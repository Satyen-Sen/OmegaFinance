import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import LandingPage from './pages/LandingPage';
import LoginPage from './pages/LoginPage';
import CreateAccount from './pages/CreateAccount';
import ResetPassword from './pages/ResetPassword';
import Verify from './pages/Verify';
import Page404 from './pages/Page404';

function App() {

    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<LandingPage />} />
                <Route path='/home' element={<Home />} />
                <Route path='/login' element={<LoginPage />} />
                <Route path='/register' element={<CreateAccount />} />
                <Route path='/reset-password' element={<ResetPassword />} />
                <Route path='/verify' element={<Verify />} />
                <Route path='*' element={<Page404 />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;