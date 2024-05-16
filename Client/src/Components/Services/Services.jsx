import { AiFillMail } from "react-icons/ai"; 
import { AiOutlinePhone } from "react-icons/ai"; 
import { BsFillTruckFrontFill } from "react-icons/bs"; 
import React from 'react'

export default function Services() {
  return (
    <div>
        <h1 className='heading-tags'>Our Services</h1>
        <div className="services-container">
            <div>
                <BsFillTruckFrontFill className="icons" size={30} />
                <h3 className="services-tag">Free Delivery upto 5000rs</h3>
            </div>
            <div>
                <AiOutlinePhone className="icons" size={40} />
                <h3 className="services-tag">24/7 contact Services</h3>
            </div>
            <div>
                <AiFillMail className="icons" size={40} />
                <h3 className="services-tag">24/7 Online Service</h3>
            </div>
        </div>
      
    </div>
  )
}