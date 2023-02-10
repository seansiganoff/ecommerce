import React, { useEffect } from 'react';
import { products } from '../../products';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import './watches.css';
import { motion } from 'framer-motion';




export default function Watches() {
  const watchesFromProductsList = products.map(items => items) || '[]';
  const [watchlist, setWatchlist] = useState(watchesFromProductsList);

  


  function filterWatchesByClass(id) {
    setWatchlist(products.filter(items => items.class === id))
  }



  function GetAllWatchesFromProducts() {
    const filteredItems = watchlist.map(item => item)
    return (
      
           filteredItems.map(items => (
            <div key={items.id} className='watch-items'>
              <Link to='/showcase' state={{getItem: items}}>
                <img alt={items.model} src={items.url} />
                <br />
                {items.model}
              </Link>
            </div>
          )) 
      
    )
    
  }

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <motion.div className='watches-container' initial={{opacity: 0}} animate={{opacity: 1, transition:{duration: 1}}} exit={{opacity: 0}}>
      <div className='watch-header'>
        <div className='watch-header-overlay'>
          <div className='watches-h1-div'>
            <h1>COLLECTION</h1>
          </div>
          <div className='select-watches'>
              <div>
                Filter
              </div>
              <div className='watch-type-btn'>
                <button onClick={() => setWatchlist(products.filter(items => items))}>ALL STYLES</button>
                <button onClick={() => filterWatchesByClass('ss')}>STAINLESS STEEL</button> 
                <button onClick={() => filterWatchesByClass('hh')}>TWO TONE</button> 
                <button onClick={() => filterWatchesByClass('gold')}>GOLD</button>
              </div>
          </div>
          <p>Choose a watch to view details</p>
          <div className='watches'>{GetAllWatchesFromProducts()}</div>
          
        </div>
        
      </div>  
        
      
    </motion.div>
  )
}
