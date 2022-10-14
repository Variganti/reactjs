//useEffect() - CDM
import React,{useState,useEffect} from "react";

export default function DataLoader(){

    const[users,setUsers]=useState([])

    //https://jsonplaceholder.typicode.com/users/

    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res=> res.json())
        .then(jsondata=>setUsers(jsondata))

    },[])

    return(
        <div className="bg-warning">
            <ul>
             {users.map(el=>(<li key={el.id}>{el.name} - {el.email}</li>))}
            </ul>
        </div>
    )
}