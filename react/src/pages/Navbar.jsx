import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Navbar() {
  return (
    <div className='Navbar'>
      <h1 className='navbar_menu'>Edu System</h1>
      <div className='navbar_links'>
        <NavLink>Home</NavLink>
        <NavLink>About Us</NavLink>
        <NavLink>Contact</NavLink>
        <NavLink>Servece</NavLink>
      </div>
      

    </div>
  )
}
