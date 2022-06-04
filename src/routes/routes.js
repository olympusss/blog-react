import React from "react"
import {BrowserRouter,Route,Routes} from "react-router-dom"
import PrivateRoute from "./privateRoute"
import Home from "../pages/home/Home";
import About from "../pages/about/About";
import NotFound from "../pages/notFound";
import history from "./history"
import Contact from "../pages/contact/Contact";
import Write from "../pages/write/Write"
import Login from "../pages/login/Login";
import Registration from "../pages/registration/Registration";

const RoutesComponent = ()=>{
    return(
        <BrowserRouter
        //  history={history}
          >
            <Routes>
                <Route path="/" element={<PrivateRoute element={<Home/>} />} />
                <Route path="/about" element={<PrivateRoute element={<About/>} />} />
                <Route path="/contact" element={<PrivateRoute element={<Contact/>} />} />
                <Route path="/write" element={<PrivateRoute element={<Write/>} />} />
                <Route path="/login" element={<Login/>} />
                <Route path="/registration" element={<Registration/>} />
                <Route path="*" element={<NotFound/>} />
            </Routes>
        </BrowserRouter>
    )
}

export default RoutesComponent