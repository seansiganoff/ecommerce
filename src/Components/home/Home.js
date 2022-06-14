import React from 'react'
import './style.css'
import WatchList from '../watches/WatchList';


export default function Home() {
  const dayjust = require('../../images/dayjust2.webp')
  const president = require('../../images/gold.webp')
  const president2 = require('../../images/platinum.webp')
  const dayjust2 = require('../../images/hh.webp')
  const daytona =require('../../images/daytona.webp')
  const sub = require('../../images/sub.webp')
  return (
    <div className='header'>
        <div className='header-overlay'>
            <h1>Welcome to the world of watches</h1>
        </div>
        <WatchList 
        watch1={dayjust}
        watch2={president}
        watch3={president2}
      />

      <WatchList 
        watch1={sub}
        watch2={dayjust2}
        watch3={daytona}
      />
    </div>
  )
}
