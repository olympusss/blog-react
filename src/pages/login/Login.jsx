import React from 'react'
import './login.css'

export default function Login() {
  return (
    <div className='loginBody'>
        <div className='login'>
            <div className='loginUsername'>
                <i className="loginIcon fa-solid fa-user"></i>
                <input className='loginInput' type="text" placeholder='Username'/>
            </div>
        </div>
    </div>
  )
}
