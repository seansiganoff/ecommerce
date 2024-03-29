
import './App.css';
import Nav from '../nav/Nav';
import { useEffect, useState } from 'react';
import AnimatedRoutes from '../AnimatedRoutes';
import Footer from '../footer/Footer';
import '@stripe/stripe-js'

  

function App() {
  const cartsFromLocalStorage = JSON.parse(localStorage.getItem("cartInfo") || "[]")
  const [cart, setCart] = useState(cartsFromLocalStorage);
  
  
  
  useEffect(() => {
    localStorage.setItem("cartInfo", JSON.stringify(cart))
  }, [cart])
  
  const handleClearProduct = (product) => {
    setCart(cart.filter(item => item.id !== product.id))
  }
  const handleRemoveProduct = (product) => {
    const productExist = cart.find((item) => item.id === product.id);
    if(productExist.quantity === 1) {
      setCart(cart.filter((item) => item.id !== product.id));
    } else {
      setCart(
        cart.map((item) => item.id === product.id ? {...productExist, quantity: productExist.quantity - 1} : item)
      )
    }
  }

  const handleAddProduct = (product) => {
    const productExist = cart.find(item => item.id === product.id);
    if(productExist) {
      setCart(cart.map((item) => item.id === product.id ? {...productExist, quantity: productExist.quantity + 1} : item))
    } else {
      setCart([...cart, {...product, quantity: 1}])
    }
  }

  
  
  
  const handleClearCart = () => {
    setCart([]);
  }
  

  return (
    <div className='App-container'>
      <Nav cart={cart}/>
      <AnimatedRoutes 
        cart={cart} 
        handleAddProduct={handleAddProduct} 
        handleRemoveProduct={handleRemoveProduct} 
        handleClearCart={handleClearCart}
        handleClearProduct={handleClearProduct}
        setCart={setCart}
      />
      <Footer />
    </div>
  );
}

export default App;
