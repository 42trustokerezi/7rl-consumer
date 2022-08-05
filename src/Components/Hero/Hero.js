import React from 'react'
import './hero.css'
import heroimg from '../../Assets/img/usp.jpg'
const Hero = () => {
  return (
    <div className='hero-container'>
        <div className='hero-info'>
            <h1>Affordable, Key health checks are just a click away</h1>
            <p>Begin the journey to a healthier you by taking a 7RiverLabs health check today. Each health check is seasoned with important parameters per required need that would confirm your health status, provide insights for making informed lifestyle decisions as well as guide you and / or your physician towards better treatment options</p>
        </div>
        <div className='hero-image'><img src={heroimg} /></div>
    </div>
  )
}

export default Hero