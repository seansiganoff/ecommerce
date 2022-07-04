
import './showcase.css';
import { motion } from 'framer-motion';
import { useLocation } from 'react-router-dom';



export default function Showcase({ handleAddProduct}) {
  const location = useLocation();
  const {getItem} = location.state;
  let watch = getItem;
 
  function getPrice(item) {
    let itemToString = item.toString().split('')
    const string1 = itemToString.slice(0, 2).join('')
    const string2 = itemToString.slice(-3).join('')
    return `$${string1},${string2}`
  }


  return (
    <motion.div className='showcase-container' initial={{opacity: 0}} animate={{opacity: 1, transition:{duration: 1}}} exit={{opacity: 0}}>
      <div className='watch-container'>
        <div className='showcase-left-side'>
          <h1>{watch.model} </h1>
          <br />
          <p>{watch.heading}</p>
          <br />
          <div className='price'>{getPrice(watch.price)}<br /><button className='add-to-cart-button' onClick={() => handleAddProduct(watch)}>Add To Cart</button></div>
        </div>
        <div className='showcase-right-side'>
          <img alt='Dayjust2' src={watch.url} />
        </div>
      </div>
      
      <div className='showcase-description-div'>
        <div className='watch-description-div' >{watch.description}</div>
        <div className='watch-info-div'>{watch.info}</div>
      </div>
      
    </motion.div>
  )
}
