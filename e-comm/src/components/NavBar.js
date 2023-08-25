import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <div className="nav">
      <ul>
        <li>LOGO</li>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/cart">Cart</Link></li>
        <li><Link to="/profile">Profile</Link></li>
      </ul>
      
    

    </div>
  )
}

export default NavBar