import React from 'react'
import './style.css'
import WatchList from '../watches/WatchList';


export default function Home() {
  const datejusttwo = {
    url: require('../../images/datejusttwo.webp'),
    price: '$12,000.00',
    model: "DATEJUST TWO"
  }
  const president = {
    url: require('../../images/gold.webp'),
    price: '$42,500.00',
    model: "PRESIDENTIAL"
  }
  
  const president2 = {
    url: require('../../images/platinum.webp'),
    price: '$49,000.00',
    model: "PRESIDENTIAL"
  }

  const gmt = {
    url: require('../../images/gmt.webp'),
    price: '$37,500.00',
    model: "GMT"
  }

  const daytona = {
    url: require('../../images/daytona.webp'),
    price: '$37,500.00',
    model: "DAYTONA"
  }
  
  const sub = {
    url: require('../../images/sub.webp'),
    price: '$18,500.00',
    model: "SUBMARINER"
  }
 
  
  return (
    <div className='header'>
        <div className='header-overlay'>
            <h1>Welcome to the world of watches</h1>
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
    </div>
  )
}
