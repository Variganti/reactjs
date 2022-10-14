import React from "react";
import { useParams } from "react-router-dom";


const UserProfile=()=>{

    let {id} =useParams()

    return (
        <div className="bg-info">
            <h3>User Profile of #{id}</h3>
           <p> I am krishna a senior developer </p>
        </div>
    )
}

export default UserProfile