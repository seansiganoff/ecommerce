import React from 'react'
import './home.css'
import WatchList from '../watches/watchlist/WatchList';
import { motion } from 'framer-motion';
import {datejusttwo, president, president2, gmt, sub, daytona} from '../watches/watchInfo/WatchInfo'
 

export default function Home() {


  
 
  
  return (
    <motion.div className='header' initial={{opacity: 0}} animate={{opacity: 1, transition:{duration: 1}}} exit={{opacity: 0}} >
        <div className='header-overlay'>
          <div className='main-logo-container'>
            <img alt='logo' className='header-logo' src={require('../../images/logo3.png')} />
            <h1>ROLEX</h1>
          </div>
        </div>
        <WatchList 
        watch1={datejusttwo}
        watch2={president}
        watch3={president2}
      />

      <WatchList 
        watch1={sub}
        watch2={gmt}
        watch3={daytona}
      />
    </motion.div>
  )
}
