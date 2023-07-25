import React from 'react'
import featureimg from "../../images/features.jpg";
import SelfImprovementIcon from '@mui/icons-material/SelfImprovement';
import PersonSearchIcon from '@mui/icons-material/PersonSearch';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import FavoriteIcon from '@mui/icons-material/Favorite';
import "./Features.css"

function Features() {
  return (
    <div className='features' id='Features'> 
      <h1>Features</h1>

    <div className="features-content">    
      <div className="features-list">
        <div className="feature1 ">
          <h2>Experienced Staff</h2>
          <p>
              <span><SelfImprovementIcon fontSize='large' /></span>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, repudiandae?
          </p>
        </div>
        <div className="feature2">
          <h2>Individual Approach</h2>
          <p>
            <span><PersonSearchIcon fontSize='large' /></span> 
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis, voluptatibus.
          </p>
        </div>
        <div className="feature3">
          <h2>Affordable Cost</h2>
          <p>
            <span><CurrencyRupeeIcon fontSize='large' /></span>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, veritatis.
          </p>
        </div>
        <div className="feature4">
          <h2>Quality Health-Tips</h2>
          <p>
            <span><FavoriteIcon fontSize='large' /></span>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, voluptatibus.
          </p>
        </div>
      </div>
      <div className="feature-img">
        <img src={featureimg} alt="img" />
      </div>
    </div>
    </div>  
  )
}

export default Features
