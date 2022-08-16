import React from 'react';
import './nav.css'
import { Link, useMatch, useResolvedPath } from 'react-router-dom';
import {BsBag} from 'react-icons/bs'




export default function Nav({cart}) {
    const itemsInCart = cart.map(items => items.quantity);
    const reducedSum = itemsInCart.reduce((prev, cur) => prev + cur, 0);
  return (
        <nav className='nav'>
                <CustomeLink to="/watches">Watches</CustomeLink>
            <ul>
                <CustomeLink to="/">Home</CustomeLink>
                <CustomeLink to="/login">Login</CustomeLink>
                <CustomeLink to="/users/cart"><BsBag /><span className='cart-length'>{cart.length === 0 ? "" : reducedSum}</span></CustomeLink>
            </ul>
        </nav>
  )
}

function CustomeLink({to, children, ...props}) {
    const resolvedPath = useResolvedPath(to)
    const isActive = useMatch({path: resolvedPath.pathname, end: true})
    return (
        <li className={isActive ? "active" : ""}>
            <Link to={to} {...props}>
                {children}
            </Link>
        </li>
    )
}
