import React from 'react';
import './style.css'
import { Link, useMatch, useResolvedPath } from 'react-router-dom';



export default function Nav() {
  return (
        <nav className='nav'>
            <Link to="/" className='site-title'>
                Site Name
            </Link>
            <ul>
                <CustomeLink to="/new">new</CustomeLink>
                <CustomeLink to="/">Home</CustomeLink>
                <CustomeLink to="/users/login">Login</CustomeLink>
                <CustomeLink to="/users/cart">Cart</CustomeLink>
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
