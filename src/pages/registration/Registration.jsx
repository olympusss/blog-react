import React, {useState} from 'react'
import './registration.css'
import { Link, useNavigate } from 'react-router-dom';
import { axiosInstance } from '../../utils/axiosInstance';

export default function Registration() {
    const[clicked,setClicked] = useState(false);
    const[username,setUserName] = useState('');
    const[password,setPassWord] = useState('');
    const[confirm_password,setConfirmPassWord]=useState('');
    const[email,setEmail]=useState('');
    let navigate = useNavigate()
    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
          check()
        }
      }

    const check=()=>{
        setClicked(true);
        if (username == "" || password == "" || confirm_password == ""){
            alert("Please, fill the all fields!")
            return;
        }
        if (password != confirm_password){
            alert("Password not match!")
            return;
        }
        axiosInstance.post("/registration", {
          username,
          password,
          email  
        }).then((res)=>{
            console.log(res.data.body);
            if (res.data.body === "INSERTED"){
                alert("Successfully registered!")
                navigate("/login")
            }
        })
    }
  return (
    <div className='registrationBody'>
        <div className="loginCamera">
            <i className="loginCameraIcon fa-solid fa-camera"></i>
        </div>
        <div className="registration">
            <div className={`registrationField ${username==="" && clicked && "requiredDiv"}`}>
                <span className='required'>*</span>
                <input value={username} onKeyDown={handleKeyDown} onChange={e=>setUserName(e.target.value)} 
                    className={`registrationInput ${username==="" && clicked && "requiredInput"}`} 
                    type="text" placeholder='Username'/>
            </div>
            
            <div className={`registrationField ${password==="" && clicked && "requiredDiv"}`}>
                <span className='required'>*</span>
                <input value={password} onKeyDown={handleKeyDown} onChange={e=>setPassWord(e.target.value)} 
                    className={`registrationInput ${password==="" && clicked && "requiredInput"}`} 
                    type="password" placeholder='Password'/>
            </div>
            
            <div className={`registrationField ${confirm_password==="" && clicked && "requiredDiv"}`}>
                <span className='required'>*</span>
                <input value={confirm_password} onKeyDown={handleKeyDown} onChange={e=>setConfirmPassWord(e.target.value)} 
                    className={`registrationInput ${confirm_password==="" && clicked && "requiredInput"}`} 
                    type="password" placeholder='Confirm password'/>
            </div>
            
            <div className='registrationField'>
                <span className='required'  id="emailreq">*</span>
                <input value={email} onKeyDown={handleKeyDown} onChange={e=>setEmail(e.target.value)}
                    className='registrationInput' type="email" placeholder='Email'/>
            </div>
            <button type="button" onClick={()=>check()} className='registrationButton'>REGISTRATION</button>
            <span className='registrationLogin'><Link to="/login">Log in</Link></span>
        </div>
    </div>
  )
}
