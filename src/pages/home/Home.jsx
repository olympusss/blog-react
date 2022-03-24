import React, {useState} from "react"
import Header from "../../header/Header"
import Posts from "../../posts/Posts"
import Sidebar from "../../sidebar/Sidebar"
import TopBar from "../../topbar/TopBar"
import "./home.css"

export default function Home() {

  const [data,setData] = useState([])

  const getDataFromChild = (id)=>{
    console.log(id)
    setData("backenden gelen information")
  }
  return (
      <>
        <Header/>
        <div className="home">
          <Posts data={data}/>
          <Sidebar function = {getDataFromChild} />
        </div>
      </>
  )
}
