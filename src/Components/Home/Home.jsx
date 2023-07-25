import React from 'react'
import Navbar from '../Navbar/Navbar'
import './Home.css'
import img from "../../images/img1.jpeg"

function Home() {
  return (
    <div className='home' id='Home'>
      <Navbar />
      <div className="home-content">

      <div className="heading">
        <h1>Start Healing Your Mind,Body & Soul </h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, velit. Quasi quisquam explicabo reprehenderit dolorem deleniti atque magni pariatur nesciunt!</p>
        <div className="banner-btn">
          <a href="#Contact">
            <span></span>
            Get Started
          </a>
        </div>
      </div>
      <div className="heading-img">
        <img src={img} alt="heading-img" />
      </div>
      
    </div>
            
      </div>
  )
}

export default Home
