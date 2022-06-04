import React, { useState, useEffect } from 'react'
import { axiosInstance } from '../../../utils/axiosInstance'
import './sidebar.css'

export default function Sidebar(props) {
  // let [name, setName] = useState()
  // useEffect(() => {
  //   axiosInstance.get('/category-list/')
  //   .then((res) =>{
  //      console.log(res.data.body);
  //      setName(res.data.body)
  //     }).catch((err)=>console.log(err))
  // },[])
  return (
    <div className='sidebar'>
      <div className="sidebarItem">
            <span className="sidebarTitle">ABOUT ME</span>
            <img 
                className='sidebarImg'
                src="/img/yellow_flower.jpg" 
                alt="" 
            />
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Eaque cumque exercitationem quas facilis ipsa commodi.
            </p>
      </div>
      <div className="sidebarItem">
            <span className="sidebarTitle">CATEGORIES</span>
                <ul className="sidebarList">
                    
                      {/* {name?.map((item)=>{
                        return <li className="sidebarListItem"> {item.name} </li>
                      })} */}
                      <li className='sidebarListItem'>Music</li>
                      <li className='sidebarListItem'>Life</li>
                      <li className='sidebarListItem'>Sport</li>
                      <li className='sidebarListItem'>Movie</li>
                      <li className='sidebarListItem'>Cooking</li>
                      <li className='sidebarListItem'>Others</li>
                  
                </ul>
      </div>
      <div className="sidebarItem">
            <span className="sidebarTitle">FOLLOW US</span>
            <div className="sidebarSocial">
                <i className="sidebarIcon fa-brands fa-facebook-square"></i>
                <i className="sidebarIcon fa-brands fa-twitter-square"></i>
                <i className="sidebarIcon fa-brands fa-pinterest-square"></i>
                <i className="sidebarIcon fa-brands fa-instagram-square"></i>
            </div>
      </div>
    </div>
  )
}
