import React from 'react'
import userimg1 from "../../images/userimg1.jpeg"
import userimg2 from "../../images/userimg2.webp"
import userimg3 from "../../images/userimg3.jpeg"
import "./Testimonials.css"
import TwitterIcon from '@mui/icons-material/Twitter';

function Testimonials() {
  return (
    <div className='testimonials' id='Testimonials'>
      <h1>Testimonials</h1>

      <div className="testm-content">
        
        <div className="testm test1">
            <div className="user-info">
              <img src={userimg1} alt="" />
                <div className="user">
                <div className="username">
                    <h3>KEN NORMEN</h3>
                    <span><TwitterIcon /></span>
                </div>
                <div>
                  <p>@kennormen</p>
                </div>
              </div>
            </div>
            <div className="msg">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi, saepe? Tempore, aliquam. Officia voluptate enim eaque, nobis temporibus aperiam doloremque alias quod quae, in numquam, tempore ipsam a soluta delectus.
            </div>
        </div>
        <div className="testm test2">
            <div className="user-info">
              <img src={userimg2} alt="" />
              <div className="user">
                <div className="username">
                  <h3>ALIS MARTIN</h3>
                  <span><TwitterIcon /></span>
                </div>
                <div>
                  <p>@alismartin</p>
                </div>
              </div>
            </div>
            <div className="msg">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.,  deleniti cum enim repudiandae dicta pariatur in necessitatibus sit, nostrum illum!
            </div>
        </div>
        <div className="testm test3">
            <div className="user-info">
              <img src={userimg3} alt="" />
              <div className="user">
                <div className="username">
                  <h3>JACK SPARROW</h3>
                  <span><TwitterIcon /></span>
                </div>
                <div>
                    <p>@jacksparrow</p>
                </div>
              </div>
            </div>
            <div className="msg">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore officia sapiente ullam suscipit, optio quae, minus velit aliquid, recusandae illo numquam. Soluta, aliquam reiciendis suscipit voluptate deserunt magnam! Enim, molestiae?
            </div>
        </div>
      </div>
    </div>
  )
}

export default Testimonials
