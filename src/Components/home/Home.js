import React from 'react'
import './style.css'
import WatchList from '../watches/WatchList';


export default function Home() {
  return (
    <div className='header'>
        <div className='header-overlay'>
            <h1>Welcome to the world of watches</h1>
        </div>
        <WatchList 
        watch1={require('../../images/dayjust2.webp')}
        watch2={require('../../images/president.webp')}
        watch3={require('../../images/president2.webp')}
      />

      <WatchList 
        watch1={require('../../images/sub.webp')}
        watch2={require('../../images/hh.webp')}
        watch3={require('../../images/daytone.webp')}
      />
    </div>
  )
}
