import React from 'react'
import './showcase.css'
import { useLocation } from 'react-router-dom'

export default function WatchView() {
  const location = useLocation();
  const {from} = location.state;
  const watch = from;
  
  
  
  
  return (
    <div className='showcase-container'>
      <div className='watch-container'>
        <div className='showcase-left-side'>
          <h1>{watch.model} </h1>
          <br />
          <p>{watch.heading}</p>
          <br />
          <div className='price'>{watch.price}</div>
        </div>
        <div className='showcase-right-side'>
          <img alt='Dayjust2' src={watch.url} />
        </div>
      </div>
      <div className='showcase-description-div'>
        <div className='watch-description-div' >{watch.description}</div>
        <div className='watch-info-div'>{watch.info}</div>
      </div>
      
    </div>
  )
}
