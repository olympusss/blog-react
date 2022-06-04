import React, { useState } from 'react'
import './login.css'
import { Link,useNavigate } from "react-router-dom"
import { axiosInstance } from "../../utils/axiosInstance";

export default function Login() {
  const[username,setUserName]=useState('');
  const[password,setPassWord]=useState('');
  
  let navigate = useNavigate();
  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      LoginTo()
    }
  }

  const LoginTo = ()=>{
    axiosInstance.post("/login",{
      // username:username,
      username,
      password
    }).then((res)=>{
      console.log(res.data.body);
      if (res.data.body === "ACCESS") {
        localStorage.setItem("Authentication",res.data.body)
        navigate("/");
      }else{
        alert("User Not Found")
      }
    }).catch((err)=>{
      console.log(err);
    })
  }
  return (
    <div className='loginBody'>
        <div className='login'>
            <div className='loginUsername'>
                <i className="loginIcon fa-solid fa-user"></i>
                <input value={username}  onKeyDown={handleKeyDown} onChange={e=>setUserName(e.target.value)} className='loginInput' type="text" placeholder='Username'/>
            </div>
            <div className="loginUsername">
                <i className="loginIcon fa-solid fa-lock"></i>
                <input value={password}  onKeyDown={handleKeyDown} onChange={e=>setPassWord(e.target.value)} className='loginInput' type="password" placeholder='Password'/>
            </div>
            <button type="button" onClick={LoginTo} className='loginButton'>LOGIN</button>
            <span className='loginRegistration'><Link to="/registration">Registration</Link></span>
        </div>
    </div>
  )
}