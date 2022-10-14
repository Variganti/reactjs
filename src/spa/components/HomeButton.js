import React from "react";
import {useNavigate, useNavigation} from 'react-router-dom'

export const HomeButton=()=>{

    let navigate=useNavigate()

    const handleClick=()=>{
        navigate('/')
    }
    return(
        <div >
           <button className="btn btn-primary" onClick={handleClick}>
            Go to Homepage
           </button>
        </div>
    )
}

