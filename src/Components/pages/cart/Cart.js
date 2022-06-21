import React from 'react';
import './cart.css'
import { motion } from 'framer-motion';

export default function Cart() {
  return (
    <motion.div className='cart-container' initial={{opacity: 0}} animate={{opacity: 1, transition:{duration: 1}}} exit={{opacity: 0}}>
      
    </motion.div>
  )
}
