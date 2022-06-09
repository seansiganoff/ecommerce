import React from 'react'
import { Link } from 'react-router-dom'
import './style.css';



export default function WatchList({watch1, watch2, watch3}) {
  return (
    <div className='watch-list-div'>
        <Link to='/view'><img alt='watch' className='watch' src={watch1} /></Link>
        <img alt='watch' className='watch' src={watch2} />
        <img alt='watch' className='watch' src={watch3} />
    </div>
  )
}
