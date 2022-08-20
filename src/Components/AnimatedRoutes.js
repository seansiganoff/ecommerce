import React from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import Cart from './pages/cart/Cart';
import Showcase from './pages/showcase/Showcase';
import Home from './pages/home/home';
import Watches from './pages/watches/Watches';





function AnimatedRoutes({cart, handleAddProduct, handleRemoveProduct, handleClearCart, handleClearProduct}) {
    const location = useLocation();
    

    
    return (
        <div className='AnimatedRoutes'>
            <Routes location={location} key={location.pathname}>
                <Route path="/watches" element={<Watches />} />
                <Route path="/showcase" element={<Showcase cart={cart} handleAddProduct={handleAddProduct}/>} />
                <Route path="/" element={<Home />} />
                <Route path="/users/cart" element={<Cart cart={cart} handleAddProduct={handleAddProduct} handleRemoveProduct={handleRemoveProduct} handleClearCart={handleClearCart} handleClearProduct={handleClearProduct}/>} />
            </Routes>
        </div>
    )
}

export default AnimatedRoutes