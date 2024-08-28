import React from 'react'
import logo from '../Images/travelmania-logo-01.jpg'
import './Header.css'
import { Link } from 'react-router-dom'
const Header = () => {
  return (
    <div className='head'>
        <div className='logo'>
            <Link to='/'><img src={logo} alt=""/></Link>
        </div>
        <div className='txt'>Plan Your DREAM Trip With <span>travelmania</span></div>
        <button><Link to='/' className='link'>Home</Link></button>
       <button><Link to='/destinations' className='link'>Destinations</Link> </button>
   <button><Link to='/signup' className='link'>Sign Up</Link></button>

    </div>
  )
}

export default Header
