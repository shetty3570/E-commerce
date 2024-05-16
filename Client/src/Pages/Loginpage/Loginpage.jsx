import React, { useState } from 'react'
import axios from 'axios'
// import './Loginpage.css'
import {useNavigate} from 'react-router-dom'


export default function Loginpage() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const navigate = useNavigate()

    const LoginUser = async(e) => {
        e.preventDefault()
        try {
            const response = await axios.post('http://localhost:3000/api/v1/user/login', {
                email:email,
                password:password
            })
            console.log(response.data.data)
            localStorage.setItem('userLogged' , JSON.stringify(response.data.data))
            alert('Successful!')
            navigate('/')
    } catch(error) {
        alert('try again')
    }
}
  return (
    <div className='container'>
      <form className='form'>
        <h2>LOGIN</h2>

        <label >Email:</label>
        <input type="email" placeholder='Email'
        onChange={(e) => setEmail(e.target.value)}/>
        
        
        <label>Password:</label>
        <input type="Password" placeholder='#######'
        onChange={(e) => setPassword(e.target.value)}/>
        

        <button className='button' onClick={LoginUser} type='submit'>Login</button>
    </form>
    </div>
  
  )
}