import React from 'react'
import Banner from '../../Components/Banner/Banner'
import Footer from '../../Components/Footer/Footer'
import Services from '../../Components/Services/Services'
import Promo from '../../Components/Promo/Promo'
import Brand from '../../Components/Brands/Brand'
import PopluarProducts from '../../Components/PopularProduct/PopularProduct'
import MostFeatures from '../../Components/MostFeatures/MostFeatures'

export default function Homepage() {
  return (
    <>
    <div className='promo'>
      <Banner/>
      <Promo/>
      
    </div>
    <Brand/>
    <Services/>
    <MostFeatures/>
    <PopluarProducts/>
    <Footer/>
    </>
  )
}
