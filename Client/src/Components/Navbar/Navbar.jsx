import { AiOutlineShoppingCart } from "react-icons/ai"; 
import React from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import './Navbar.css'
import { useAuthContext } from "../../Context/AuthContext";

export default function Navbar() {
  const {user, setUser} = useAuthContext()

  const LogoutUser = async()=>{
    const response = await axios.post('http://localhost:3000/api/v1/user/logout')

    if (response.status ===200){
      localStorage.removeItem('userLogged')
      SpeechSynthesisUtterance(null)
      alert('you have been logged out')
    }
  }
  return (

    <nav className='navbar'>
        <h1 className="headingtag1">E-commerce</h1>
    <div className='navbar-links'>
      {!user ? (
        <>
        <Link className="link" to ={'/login'}>Login</Link>
        <Link className="link" to ={'/register'}>Register</Link>
        </>
      ): (
        <>
        <Link className="link" to={'/'}>Home</Link>

        <button className=" " onClick={LogoutUser}>Logout</button>
        </>
      )}
        <Link className="linkcart" to={'./cart'}><AiOutlineShoppingCart /></Link>
        
    </div>
    </nav>
   )
}