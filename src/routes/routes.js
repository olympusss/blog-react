import React from "react"
import {BrowserRouter,Route,Routes} from "react-router-dom"
import PrivateRoute from "./privateRoute"
import Home from "../pages/home/Home";
import About from "../pages/about/About";
import NotFound from "../pages/notFound";
import history from "./history"
const RoutesComponent = ()=>{
    return(
        // <Home/>
        <BrowserRouter history={history} >
            <Routes>
                <Route path="/" element={<PrivateRoute element={<Home/>} />} />
                <Route path="/about" element={<PrivateRoute element={<About/>} />} />


                <Route path="*" element={<NotFound/>} />
            </Routes>
        </BrowserRouter>
    )
}

export default RoutesComponent