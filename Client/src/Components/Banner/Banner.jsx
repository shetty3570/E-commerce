import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

export default function Banner() {
  return (
    <Carousel autoPlay showThumbs ={false} interval={3000} infiniteLoop showStatus={false} showIndicators={false} >
    <div className="banner-container">
        <img src="/images/model 4.avif" alt="banner" />
      </div>
      <div className="banner-container">
        <img src="/images/960x0.webp" alt="banner" />
      </div>
      <div className='banner-container'>
        <img src="/images/r209.webp" alt="banner" />
      </div>
      <div className="banner-container">
        <img src="/images/tony stark.webp" alt="banner" />
      </div>
    </Carousel>
  )
}
