import React from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import Home from './home/Home';
import WatchView from './watches/showcase/Showcase';
import Login from './pages/login';
import Register from './pages/register';
import Cart from './pages/cart/Cart';


function AnimatedRoutes() {
    const location = useLocation();
    
    return (
        <Routes location={location} key={location.pathname}>
            <Route path="/showcase" element={<WatchView />} />
            <Route path="/users/register" element={<Register />} />
            <Route path="/" element={<Home />} />
            <Route path="/users/cart" element={<Cart />} />
            
            <Route path="/users/login" element={<Login />} />
        </Routes>
    )
}

export default AnimatedRoutes