import React from 'react'
import TopBar from '../topbar/TopBar'

const PrivateRoute = (props)=>{
    return (
        <div>
            <TopBar/>
            {props.element}
            
        </div>
    )
}

export default PrivateRoute