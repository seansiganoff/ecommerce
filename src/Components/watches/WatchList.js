import React from 'react'
import { Link } from 'react-router-dom'
import './watchlist.css';



export default function WatchList({watch1, watch2, watch3}) {
  

  return (
    <div className='watch-list-div'>
      <div className='watch-container'>
        <Link to='/showcase' state={{from: watch1}}><img alt='watch' className='watch' src={watch1.url} /><h3>{watch1.model}</h3></Link>
      </div>
      <div className='watch-container'>
        <Link to='/showcase' state={{from: watch2}}><img alt='watch' className='watch' src={watch2.url} /><h3>{watch2.model}</h3></Link>
      </div>
      <div className='watch-container'>
        <Link to='/showcase' state={{from: watch3}}><img alt='watch' className='watch' src={watch3.url} /><h3>{watch3.model}</h3></Link>
      </div>
    </div>
  )
}
