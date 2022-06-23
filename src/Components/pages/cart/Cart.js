import React from 'react';
import './cart.css'
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';






export default function Cart() {
  const cartsFromLocalStorage = JSON.parse(localStorage.getItem("cart") || "[]")
  const [cart, setCart] = useState(cartsFromLocalStorage);
  
  
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart])
  


  function getGrandTotal() {
    const items = localStorage.getItem('cart');
    const parsedItems = JSON.parse(items);
    let sum = 0;
    for(let i in parsedItems) {
      const changeToInt = parseInt(parsedItems[i].price)
      sum += changeToInt;
    }
    let toString = sum.toString().split('')
    const string1 = toString.slice(0, 2).join('')
    const string2 = toString.slice(2).join('')
    const stringOne = parseInt(string1);
    const stringTwo = parseInt(string2);
    const totalString = `Your total is $${stringOne},${stringTwo}`;
    
    return (
      <div className='cart-total'>
        <div className='cart-total-button'>
          {totalString}
        </div>
        <div className='cart-total-button'>
          <button>Finish Shopping</button>
        </div>
        <div className='cart-total-button'></div>
          <button className='remove-from-cart-button' onClick={() => clearCart()} >clear</button>
        <br />
        
      </div>
    )
  }


  

  function clearCart() {
    localStorage.clear();
    setCart([])
  }
 
  function getItemsInCart() {
    const items = localStorage.getItem('cart');
    const parsedItems = JSON.parse(items);
    return parsedItems.map(items => (

    <div key={items.id} className='cart-items' > 
      <div>
        <div className='cart-item-text'>
        {items.model}<br />
        </div>
        <div className='cart-item-text'>
        {items.price}<br />
        </div>
        <div className='cart-item-text'>
          <button className='remove-from-cart-button'>Remove From Cart</button>
        </div>
      </div>
      <div>
        <img alt={items.model} src={items.url} />
      </div>
    </div>
    ))
  }
  

  return (
    <motion.div className='cart-container' initial={{opacity: 0}} animate={{opacity: 1, transition:{duration: 1}}} exit={{opacity: 0}}>
      <div className='cart-overlay'>
        <div className='cart-items-container'>
        {cart.length === 0 ? null : <h1>CART</h1>}
          {cart.length === 0 ? <h1>CART IS EMPTY</h1> : getItemsInCart()}
          {cart.length === 0 ? null : getGrandTotal()}
        </div>
        
      </div>
    </motion.div>
  )
}
