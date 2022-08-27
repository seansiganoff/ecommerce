import React from 'react';
import {loadStripe} from '@stripe/stripe-js';



let stripePromise;
const getStripe = () => {
  if(!stripePromise) {
    stripePromise = loadStripe(process.env.REACT_APP_STRIPE_KEY)
  }

  return stripePromise;
}

const Checkout = () => {
    
  const item = {
    price: "price_1Laq1FJ3KbyliwiakonzH6LH",
    quantity: 1

  };
  const item1 = {
    price: "price_1LbPm7J3KbyliwiaaAOyHwIg",
    quantity: 1

  };
  const checkoutOptions = {
    lineItems: [item, item1],
    mode: "payment",
    successUrl: `${window.location.origin}/success`,
    cancelUrl:  `${window.location.origin}/cancel`
  }

  const redirectToCheckout = async () => {
    console.log("redirectToCheckout")
    const stripe = await getStripe();
    const {error} = await stripe.redirectToCheckout(checkoutOptions)
    console.log('stripe checkout error', error);
  }

  return (
    <div>
        <h1>Checkout</h1>
        <h1>Checkout</h1>
        <h1>Checkout</h1>
        <h1>Checkout</h1>
        <div>
            {item.price}
            <button onClick={redirectToCheckout}>buy</button>
        </div>
    </div>
  )
}

export default Checkout