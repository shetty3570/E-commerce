//Brand.jsx



import React from 'react'
import Marquee from "react-fast-marquee";

const fakeBrandsdata =[
    {
        id: 1,
        image: '/images/mustang.jpg'
    },
    {
        id: 2,
        image: '/images/bmw logo.jpg'
    },
    {
        id: 3,
        image: '/images/ducati logo.jpg'
    },
    {
        id: 4,
        image: '/images/logo of audi.jpg'
    },
    {
        id: 5,
        image: '/images/rr.jpg'
    },
    {
        id: 6,
        image: '/images/supra.jpg'
    }
]

export default function Brand() {
  return (
    <div className='brands-container'>
      <Marquee>
        {fakeBrandsdata.map((Brand) =>{
            return(
                <img src={Brand.image} key={Brand.id}
                className='marquee-image' alt='brand-image' />
            )
        })}
      </Marquee>
    </div>
  )
}
