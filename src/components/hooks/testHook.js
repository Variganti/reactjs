import React from "react";
import App from "../../App";
import useFetch from "./useFetch";

const TestHook = (props)=>{

    const url='https://jsonplaceholder.typicode.com/users'

    const {loading,error,data=[]} =useFetch(url)

    if(error) return <p className="text-danger"> Error!</p>

    if(loading) return <p className="text-primary">
        loading ..... wait
    </p>
    return(
        <div className="bg-info">
            <h2> Data from RESt APi using custom hook </h2>
            <ul>
                {
                    data?.map(el=>(<li key={el.id}>{el.name} - {el.email}</li>))
                }
            </ul>
        </div>
    )
}

export default TestHook;