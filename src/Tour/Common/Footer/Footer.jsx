import React from 'react'
import logo from '../Images/travelmania-logo-01.jpg'
import './Footer.css'
const Footer = () => {
  return (
    <>
      <div className='foot'>
        <div className='ufoot'>
          <img src={logo} alt=''></img>
          <h1>|</h1>
          <p>It's time for new Experiences</p>
          <h6>Find The Perfect Escape</h6>
          <button>Book Your Trip</button>
        </div>
        <div className='lfoot'>
          <ul>
            <h3>COMPANY</h3>
            <li>About Us</li>
            <li> We Are Hiring</li>
            <li>TMI Reviews</li>
            <li>Terms & Conditions</li>
            <li>Privacy Policies</li>
            <li>Copyright Policies</li>
            <li>Support</li>
          </ul>
          <ul>
            <h3>PROPERTY TYPE</h3>
            <li>Homes</li>
            <li>Apartments</li>
            <li>Resorts</li>
            <li>Villas</li>
            <li>Hostels</li>
            <li>B&Bs</li>
            <li>Guest Houses</li>
          </ul>
          <ul>
            <h3>LEGAL POLICY</h3>
            <li>Terms & Conditions</li>
            <li>Disclaimer </li>
            <li>Privacy Policy</li>
            <li>We Are Hiring</li>
            <li>Share Your Travel Experience</li>
          </ul>
          <ul>
            <h3>  OTHER SERVICES</h3>
            <li>Destination Weddings</li>
            <li>Luxurt Trains</li>
            <li>Medical Tourism</li>
            <li>MICE</li>
            <li>Ayurveda Tourism</li>
          </ul>
        </div>
      </div>

    </>
  )
}

export default Footer