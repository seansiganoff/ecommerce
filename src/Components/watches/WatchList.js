import React from 'react'
import { Link } from 'react-router-dom'
import './style.css';
import WatchView from './WatchView';



export default function WatchList({watch1, watch2, watch3}) {
  return (
    <div className='watch-list-div'>
        <Link to='/view'><img className='watch' src={watch1} /></Link>
        <img className='watch' src={watch2} />
        <img className='watch' src={watch3} />
    </div>
  )
}
