import React from 'react'
import Header from '../../Common/Header/Header'
import Footer from '../../Common/Footer/Footer'
import './Destinations.css'
import { Link } from 'react-router-dom'
const Destinations = () => {
  return (
   <>
   <Header/>
   <div className='body'>
   <div className='er'>
    <h1>Explore Top Destinations by Region</h1>
   <Link to='/regions' className='link'> <li>North India</li></Link>
    <Link to='/regions' className='link'><li>South India</li></Link>
    <Link to='/regions' className='link'> <li>East India</li></Link>
    <Link to='/regions' className='link'><li>West India</li></Link>
    <Link to='/regions' className='link'> <li>Central India</li></Link>
    
   </div>
   <div className='ttd'>
    <h1>Top Trending Destinations</h1>
    <Link to='/trending' className='link'><li>Uttarakhand</li></Link>
    <Link to='/trending' className='link'> <li>Kerela</li></Link>
    <Link to='/trending' className='link'><li>Sikkim</li></Link>
    <Link to='/trending' className='link'><li>Bhutan</li></Link>
    <Link to='/trending' className='link'><li>Thailand</li></Link>
    <Link to='/trending' className='link'><li>SriLanka</li></Link>
    <Link to='/trending' className='link'><li>Rajasthan</li></Link>
    
    <Link to='/trending' className='link'><li>View all Tours</li></Link>
   </div>
   <div className='pi'>
    <h1>Packages By Interest</h1>
    <Link to='/interest' className='link'><li>Wildlife</li></Link>
    <Link to='/interest' className='link'><li>Hill Station</li></Link>
    <Link to='/interest' className='link'><li>Pilgrimage</li></Link>
    <Link to='/interest' className='link'><li>Heritage</li></Link>
    <Link to='/interest' className='link'><li>Beach</li></Link>
    <Link to='/interest' className='link'><li>Honeymoon</li></Link>
    <Link to='/interest' className='link'><li>Trekking</li></Link>
   </div>
   <div className='twd'>
    <h1>Top Weekend Destinations</h1>
   <Link to='/weekends'><li>Delhi</li></Link> 
   <Link to='/weekends'><li>Mumbai</li></Link> 
   <Link to='/weekends'><li>Banglore</li></Link> 
   <Link to='/weekends'><li>Chennai</li></Link> 
   <Link to='/weekends'><li>View more</li></Link> 
   </div>
   <div className='ihp'>
    <h1>International Holiday Packages</h1>
    <Link to='/international'><li >Bhutan </li></Link>
    <Link to='/international'> <li  >Thailand</li></Link>
    <Link to='/international'><li>Nepal</li></Link>
    <Link to='/international'><li >Dubai</li></Link>
    <Link to='/international'><li>Maldives</li></Link>
    <Link to='/international'><li>Austraila</li></Link>
    <Link to='/international'><li>View All</li></Link>
   </div>
   </div>
  
   <Footer/>
   </>
  )
}

export default Destinations