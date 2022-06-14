import React from 'react'
import './showcase.css'
import { useLocation } from 'react-router-dom'

export default function WatchView() {
  const location = useLocation();
  const {from} = location.state;
  let watch = '';
  
  if(from.includes('daytona')) watch = 'DAYTONA'
  else if(from.includes('platinum')) watch = 'PRESIDENT'
  else if(from.includes('gold')) watch = 'PRESIDENTIAL'
  else if(from.includes('sub')) watch ='SUBMARINER'
  else if(from.includes('hh')) watch = 'GMT'
  else if(from.includes('dayjust2')) watch = 'DATEJUST TWO';
  
  const datejust2_heading = 'THE OYSTER PERPETUAL DATEJUST IS THE EPITOME OF THE CLASSIC ROLEX WATCH.';
  const datejust2_description = "Created in 1945, the Datejust was the first self-winding waterproof chronometer wristwatch to display the date in a window at 3 o'clock on the dial hence its name. With its timeless aesthetics, functions and rich history, the Datejust is a watchmaking icon and one of the brands most recognizable watches."
  
  return (
    <div className='container'>
      <div className='watch-container'>
        <div className='left-side'>
          <h1>{watch}</h1>
        </div>
        <div className='right-side'>
          <img alt='Dayjust2' src={from} />
        </div>
      </div>
      <div className='description-div'>
        <div className='watch-header-div' >{datejust2_heading}</div>
        <div className='watch-description-div'>{datejust2_description}</div>
      </div>
    </div>
  )
}
