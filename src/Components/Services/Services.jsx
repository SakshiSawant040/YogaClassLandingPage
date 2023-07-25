import React from 'react'
import "./Services.css"
import img1 from '../../images/services-img1.avif';
import img2 from '../../images/breathing-exercises.jpg'
import img3 from "../../images/services-img3.avif";
import img4 from '../../images/services-img4.avif'
function Services() {
  return (
    <div className='Services' id='Services'>
      <div className="services-title">
        <h1>Services</h1>
      </div>

      <div className="service-box">
        <div className="service">
          <img src={img1} alt="service1" />
          <div className="layer"></div>
          <div className="service-desc">
            <h3>Qualified Trainer</h3>
            <hr />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, corrupti.</p>
          </div>
        </div>
        <div className="service">
            <img src={img2} alt="service1" />
            <div className="layer"></div>
            <div className="service-desc">
              <h3>Qualified Trainer</h3>
              <hr />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, corrupti.</p>
            </div>
        </div>
        <div className="service">
            <img src={img3} alt="service1" />
            <div className="layer"></div>
            <div className="service-desc">
              <h3>Qualified Trainer</h3>
              <hr />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, corrupti.</p>
            </div>
        </div>
        <div className="service">
            <img src={img4} alt="service1" />
            <div className="layer"></div>
            <div className="service-desc">
              <h3>Qualified Trainer</h3>
              <hr />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, corrupti.</p>
            </div>
        </div>
      </div>

    </div>
  )
}

export default Services
