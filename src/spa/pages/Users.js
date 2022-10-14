import React from "react";
import {Outlet, useLocation,useNavigate} from 'react-router-dom'
import { HomeButton } from "../components/HomeButton";

const Users=()=>{

    const navigate=useNavigate()
    const location=useLocation() 

    console.log("Location is : ",location.pathname)

    const handleClick=(userId)=>{
        navigate(`/users/${userId}`)
    }

    return(
        <div className="bg-warning">
            <h3>Users page</h3>
        <button className="user-link" onClick={()=> handleClick('123')}> View User profile of 123</button>
        
        <Outlet/>
        <HomeButton/>

        </div>
    )
}

export default Users