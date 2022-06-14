import React from 'react'
import { Link } from 'react-router-dom'
import './watchlist.css';




export default function WatchList({watch1, watch2, watch3}) {
  return (
    <div className='watch-list-div'>
        <Link to='/showcase' state={{from: watch1}}><img alt='watch' className='watch' src={watch1} /></Link>
        <Link to='/showcase' state={{from: watch2}}><img alt='watch' className='watch' src={watch2} /></Link>
        <Link to='/showcase' state={{from: watch3}}><img alt='watch' className='watch' src={watch3} /></Link>
    </div>
  )
}
