import React from 'react';
import './cart.css'
import { motion } from 'framer-motion';
import { useEffect } from 'react';
import { loadStripe } from '@stripe/stripe-js';





export default function Cart({cart, handleAddProduct, handleRemoveProduct, handleClearCart, handleClearProduct}) {
  
  let stripePromise;
  const getStripe = () => {
    if(!stripePromise) {
      stripePromise = loadStripe(process.env.REACT_APP_STRIPE_KEY)
    }

    return stripePromise;
  }

  const checkoutItems = cart.map((items) => (
    {
      price: items.checkoutprice,
      quantity: items.quantity
    }
  ))
 

  const checkoutOptions = {
    lineItems: checkoutItems,
    mode: "payment",
    successUrl: `${window.location.origin}/checkout/success`,
    cancelUrl:  `${window.location.origin}/cancel`
  }

  const redirectToCheckout = async () => {
    const stripe = await getStripe();
    const {error} = await stripe.redirectToCheckout(checkoutOptions)
    console.log('stripe checkout error', error);
  }
  
  //Converts the numbers and add's the final sum
  function getGrandTotal() {
    
    const totalPrice = cart.reduce((price, item) => price + item.quantity * item.price, 0)
    let toString = totalPrice.toString().split('')
    let string1;
    if(toString.length === 6) {
      string1 = toString.slice(0, 3).join('')
    } else {
      string1 = toString.slice(0, 2).join('')
    }
    const string2 = toString.slice(-3).join('')
    const totalString = `Your total is $${string1},${string2}`;
    

     
    return (
      <div className='cart-total'>
        <div className='cart-total-button'>
          {totalString}
        </div>
        <div className='cart-total-button'>
          <button onClick={redirectToCheckout} >Checkout</button>
        </div>
        <div className='cart-total-button'></div>
          <button className='remove-from-cart-button' onClick={() => handleClearCart()}>Clear All Items</button>
        <br />
      </div>
    )
  }


  
  

  

  function getPrice(item) {
    let itemToString = item.toString().split('')
    const string1 = itemToString.slice(0, 2).join('')
    const string2 = itemToString.slice(-3).join('')
    return `$${string1},${string2}`
  }


 
  function getItemsInCart() {
    
    return cart.map(items => (

    <div key={items.id} className='cart-items' > 
      <div>
        <div className='cart-item-text'>
        {items.model}<br />
        </div>
        <div className='cart-item-text'>
        {getPrice(items.price)}<br />
        </div>
        <div className='cart-item-text'>
          <button className='remove-from-cart-button' onClick={() => handleClearProduct(items)}>Remove From Cart</button>
        </div>
      </div>
      <div>
        <img className='cart-item-img' alt={items.model} src={items.url} />
        <div className='item-quantity'>
          <button className='cart-minus-btn' onClick={() => handleRemoveProduct(items)}>-</button>
          <div className='quantity-number'>{items.quantity}</div>
          <button className='cart-add-btn' onClick={() => handleAddProduct(items)}>+</button>
        </div>
      </div>
    </div>
    ))
  }
  


  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  
  
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
