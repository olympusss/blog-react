import React,{useState} from "react";
import './contact.css'

export default function Contact() {
  const[active,setActive] = useState("phone")
  const[iconActive,setIconActive] = useState("tw")
  return (
    <div className='contact'>
      <div className="contactElemDivs">
        <div className="elemLeft">
          <div className="leftTitle">
            <span className='titleTextOne'>Get a quote</span>
            <span className='titleTextTwo'>Get a quote Get a quote Get a quote Get a quote Get a quote Get a quote Get a quote Get a quote</span>
          </div>
          <div className="leftSelects">
            <div onClick={()=>setActive("phone")} className={`selectElems ${active==="phone" && "active"}`}>
              <i className="elemIcon fa fa-phone"></i>
              <span className='elemText'>Call by phone</span>
            </div>
            <div onClick={()=>setActive("sms")} className={`selectElems ${active==="sms" && "active"}`}>
              <i className="elemIcon fa fa-envelope"></i>
              <span className='elemText'>Send SMS</span>
            </div>
            <div onClick={()=>setActive("email")} className={`selectElems ${active==="email" && "active"}`}>
              <i className="elemIcon fas fa-sms"></i>
              <span className='elemText'>Email</span>
            </div>
          </div>
          <div className="instagramm">
            <div onClick={()=>setIconActive("tw")} className={`twitter ${iconActive==="tw" && "IconActive"}`}>
              <i className="insIcon fa-brands fa-twitter"></i>
            </div>
            <div onClick={()=>setIconActive("ins")} className={`twitter ${iconActive==="ins" && "IconActive"}`}>
              <i className="insIcon fa-brands fa-instagram"></i>
            </div>
            <div onClick={()=>setIconActive("faceb")} className={`twitter ${iconActive==="faceb" && "IconActive"}`}>
              <i className="insIcon fa-brands fa-facebook-f"></i>
            </div>
          </div>
        </div>
        <div className="elemRight">
          <div className="form">
            <div className="formElem">
                <span className="formSms">Location</span>
                <div className="formElems">
                  <i className="formIcon fa-solid fa-map-location-dot"></i>
                  <input className='formInput' type="text"/>
                </div>
            </div>
            <div className="formElem">
                <span className="formSms">Phone</span>
                <div className="formElems">
                  <i className="formIcon fa fa-phone"></i>
                  <input className='formInput' type="text"/>
                </div>
            </div>
            <div className="formElem">
                <span className="formSms">Name</span>
                <div className="formElems">
                  <i className="formIcon fa-solid fa-user"></i>
                  <input className='formInput' type="text"/>
                </div>
            </div>
            <div className="buttonDiv">
              <button type="button" className='formButton'>Save Contact</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
