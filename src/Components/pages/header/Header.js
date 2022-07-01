import React from 'react';
import './header.css';
import { useState } from 'react';
import { products } from '../../WatchInfo';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function Header() {
    const watchesFromProductsList = products.map(items => items) || '[]';
    const [watchlist, setWatchlist] = useState(watchesFromProductsList);



    function getAllWatches() {
        setWatchlist(products.filter(items => items))
    }

    function changeWatch(item) {
        setWatchlist(products.filter(items => items.class === item))
    }
    
    function GetWatches() {
        const filteredItems = watchlist.map(item => item)
        
        return (
        filteredItems.map(items => (
            <div key={items.id} className='display-items'>
              <Link to='/showcase' state={{getItem: items}}>
                <img alt={items.model} src={items.url} />
                <br />
                {items.model}
              </Link>
            </div>
          ))
        )
      }

    function generateWatches() {
        return (
            <div>
                <h1 className='watch-list-h1'>COLLECTION</h1>
                <div className='select-watch-type'>
                    <h3>Filter Style</h3>
                    <button onClick={() => getAllWatches()}>ALL STYLES</button><button onClick={() => changeWatch('ss')}>STAINLESS STEEL</button> <button onClick={() => changeWatch('hh')}>TWO TONE</button> <button onClick={() => changeWatch('gold')}>GOLD</button>
                </div>
                <div className='watch-list'>
                    {GetWatches()}
                </div>
            </div>
        )
    }


  return (
    <motion.div className='header' initial={{opacity: 0}} animate={{opacity: 1, transition:{duration: 1}}} exit={{opacity: 0}} >
        <div className='header-background'>
            <div className='header-overlay-container'>
                <div className='header-logo-container'>
                    <img alt='logo' className='header-logo' src={require('../../../images/logo3.png')} />
                    <h1 className='header-h1'>ROLEX</h1>
                </div>
            </div>
        </div>
    
        {generateWatches()}
        
        
    </motion.div>
        
    
    
  )
}
