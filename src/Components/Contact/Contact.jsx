import React from 'react'
import "./Contact.css"
import PhoneIcon from '@mui/icons-material/Phone';
import MailIcon from '@mui/icons-material/Mail';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import logo from '../../images/yogalogo.png'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';

function Contact() {
  return (
    <div className='contact' id='Contact'>
      <h1>Contact-Us</h1>     

      <div className="contact-content">

        <div className="contact-profile">
            <img src={logo} alt="logo" />
        </div>


        <div className="contact-info">

          <div className="feild1">
            <div className="feild-heading">
              <PhoneIcon /> 
              <h3>Call-Us</h3>
            </div>
            <p>1234567890</p>
          </div>

          <div className="feild2">
              <div className="feild-heading">
                <MailIcon/>
                <h3> Location</h3>
              </div>
              <p>#30IN abc colony,xyz City IN</p>
          </div>

            <div className="feild3">
              <div className='feild-heading'>
                <LocationOnIcon/> 
                <h3>Email-Us</h3>
              </div>
              <p>example@gmail.com</p>
              </div>
        </div>

        <div className="contact-links">
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


    </div>
          

    <div className="socialmedia">
        <div className="icons">
          <span><FacebookIcon fontSize='medium'  /></span>
          <span><InstagramIcon fontSize='medium'  /></span>
          <span><TwitterIcon fontSize='medium' /></span>
          <span><YouTubeIcon fontSize='medium' /></span>
        </div>
        <div className="copyright">
          <p>Copyrights@2023-YogaDelight</p>
        </div>
      </div>

  </div>

  )
}

export default Contact
