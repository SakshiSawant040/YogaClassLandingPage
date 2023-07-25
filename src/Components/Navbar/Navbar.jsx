import React from 'react'
import logo from '../../images/yogalogo.png'
import "./Navbar.css"
import EnquiryForm from '../EnquiryForm/EnquiryForm'


function Navbar() {
  return (
    <div className='navbar'>

      <div className="logo">
        <img src={logo} alt="logo" />
      </div>

      <div className="links">
        <ul>
          <li>
            <a href="#Home">HOME</a>
          </li>
          <li>
          <a href="#Features">FEATURES</a>
          </li>
          <li>
          <a href="#Services">SERVICES</a>
          </li>
          <li>
          <a href="#Testimonials">TESTIMONIALS</a>
          </li>
          <li>
          <a href="#Contact">CONTACT-US</a>
          </li>  
        </ul>
      </div>

      <div className="form">
        <button onClick={<EnquiryForm/>}>Book An Appoinment</button>
      </div>
      
    </div>
  )
}

export default Navbar
