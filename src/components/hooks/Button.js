/*import React, { Component } from 'react'

export default class Button extends Component {

    state={buttonText:'Click me, Please'}

    handleClick=()=> {
        this.setState({buttonText:'Thanks...been clicked'})
        console.log("button clicked")
    }

  render() {
    return (
      <div>
        <button onClick={this.handleClick}
 className="btn btn-danger"> {this.state.buttonText} </button>      </div>
    )
  }
}*/

import React,{useState} from 'react'

export default function Button(){

  const [buttonText,setStateText]=useState("Click me, Please")
  //const[customers,setCustomers]=useState([])

  // function handlClick(){
  //   return setStateText('Thanks, been clicked')
  // }

  return(
    <button onClick={()=> setStateText('Thanks, been clicked')} className="btn btn-primary">
      {buttonText}
    </button>
  )

}

