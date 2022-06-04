import React from 'react'
import TopBar from '../topbar/TopBar'
import Login from '../pages/login/Login';
const PrivateRoute = (props)=>{
    let isLogin = localStorage.getItem("Authentication")

    

    
    return (
        <div>
            <TopBar/>
            {props.element} 
        </div>
    )
}

export default PrivateRoute