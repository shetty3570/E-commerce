import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

//import './Registerpage.css'

export default function Registerpage() {
    const [username, setUsername] =useState("")
    const [email,setEmail]=useState("")
    const[password,setPassword]=useState("")//usestae is shortcut for function
    const navigate = useNavigate() 

    const RegisterUser = async (e)=>{
        e.preventDefault()
            const response= await axios.post('http://localhost:3000/api/v1/user/register',{
                username:username,
                email:email,
                password:password
            })
            console.log(response)
            navigate('/login')
    }
  return (
    <div className='container'>
        <form className='form'>
            <h3 className='heading-tags'>Register</h3>

            <label>Username</label>
            <input type='text' placeholder='Your name' onChange={(e)=>setUsername(e.target.value)}/>
            
            <label>Email</label>
            <input type="email" placeholder='Your email' onChange={(e)=>setEmail(e.target.value)}/>

            <label>Password</label>
            <input type="Password" placeholder='Enter Password' onChange={(e)=>setPassword(e.target.value)}/>
            
            <button onClick={RegisterUser} type='submit'>Sign in</button>

        </form>
      
    </div>
  )
}
