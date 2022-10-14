import React from "react";
import './SpaApp.css'
import { Route,Routes } from "react-router-dom";
import Home from './pages/Home'
import About from './pages/About'
import Users from './pages/Users'
import UserProfile from './pages/UserProfile'

import Dynamic from './pages/Dynamic'

const SpaApp=()=>{
    return(
        <div className="App">
            <h1 className="bg-warning">SPA Project</h1>
            <Routes>
                <Route path='/' element={<Home/>} />     
                <Route path="about" element={<About/>} />      
                <Route path="users" element={<Users/>} />
                <Route path=":id" element={ <UserProfile/>} />
                <Route path="dynamic" element={<Dynamic/>} />
            </Routes>
        </div>
    )
}

export default SpaApp