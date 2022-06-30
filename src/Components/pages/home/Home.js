import React from 'react'
import './home.css'
import { motion } from 'framer-motion';
import {products} from '../../WatchInfo'
import { useState } from 'react';
import { Link } from 'react-router-dom';




export default function Home() {
  const watchesFromProductsList = products.map(items => items) || '[]';
  const [watchlist, setWatchlist] = useState(watchesFromProductsList);
  
  

  
 
  function getWatches() {
    const filteredItems = watchlist.map(item => item)
    
    return filteredItems.map(items => (
        <div key={items.id} className='display-items'>
          <Link to='/showcase' state={{getItem: items}}>
            <img alt={items.model} src={items.url} />
            <br />
            {items.model}
          </Link>
        </div>
    ))
  }

  



  function getAllWatches() {
    setWatchlist(products.filter(items => items))
  }

  function changeWatch(item) {
    setWatchlist(products.filter(items => items.class === item))
  }

  
  return (
    <motion.div className='header' initial={{opacity: 0}} animate={{opacity: 1, transition:{duration: 1}}} exit={{opacity: 0}} >
        <div className='header-overlay'>
          <div className='main-logo-container'>
            <img alt='logo' className='header-logo' src={require('../../../images/logo3.png')} />
            <h1>ROLEX</h1>
          </div>
        </div>
        <h1 className='watch-list-h1'>COLLECTION</h1>
        <div className='select-watch-type'>
          <h3>Filter Style</h3>
        <button onClick={() => getAllWatches()}>ALL STYLES</button><button onClick={() => changeWatch('ss')}>STAINLESS STEEL</button> <button onClick={() => changeWatch('hh')}>TWO TONE</button> <button onClick={() => changeWatch('gold')}>GOLD</button>
        </div>
        <div className='watch-list'>
          {getWatches()}
        </div>
        
        
    </motion.div>
  )
}
