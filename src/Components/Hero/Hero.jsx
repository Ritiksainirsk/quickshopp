import React from 'react'
import './Hero.css'
import arrow_icon from '../Assets/arrow.png'
import hero_img from '../Assets/hero_image2.png'
import { useParams } from 'react-router-dom'

function Hero() {
  
  return (
    <>
    <div className='hero'>

      <div className="hero-left">
        <h2>NEW ARRIVALS ONLY</h2>

        <div>
          <p>Collection</p>
          <p>For everyone</p>
        </div>

        <div className="hero-latest-btn">
          <div>Latest Collection</div>
          <img src={arrow_icon} alt="" />
        </div>
      </div>

      <div className="hero-right">
        <img src={hero_img} alt="" />
      </div>

    </div>
    </>
  )
}

export default Hero