import React from "react";
import { Link } from "react-router-dom";

export const Navigation=()=>{

    return(
        <div className="navigation bg-warning">
           <Link to="users" className="link">Users</Link>
           <Link to="about" className="link">About us</Link>
           <Link to="dynamic" className="link">Profile</Link>

        </div>
    )
}

