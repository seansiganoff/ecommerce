import React from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import Home from './home/Home';
import WatchView from './watches/showcase/Showcase';
import Login from './pages/login';
import Register from './pages/register';
import Cart from './pages/cart/Cart';


function AnimatedRoutes({cart, handleAddProduct, handleRemoveProduct, handleClearCart, handleClearProduct}) {
    const location = useLocation();
    
    return (
        <Routes location={location} key={location.pathname}>
            <Route path="/showcase" element={<WatchView cart={cart} handleAddProduct={handleAddProduct}/>} />
            <Route path="/users/register" element={<Register />} />
            <Route path="/" element={<Home />} />
            <Route path="/users/cart" element={<Cart cart={cart} handleAddProduct={handleAddProduct} handleRemoveProduct={handleRemoveProduct} handleClearCart={handleClearCart} handleClearProduct={handleClearProduct}/>} />
            
            <Route path="/users/login" element={<Login />} />
        </Routes>
    )
}

export default AnimatedRoutes