import React, { Component } from 'react'

export default class UsingRefs extends Component {

    state={data : 'react and redux'} // onChange // onClick with SE
    //refs 

    userName = React.createRef()
    password=React.createRef()

    reset(){
        console.log(this.userName.current.value)
        this.password.current.focus()
        this.userName.current.value=''
        this.password.current.value=''
    }


  render() {
    return (
      <div className='bg-warning'>
        userName : <input type="text" value={this.state.data} id="txtusername" ref={this.userName} /> <br/>
        Password : <input type="password" id="txtpwd" ref={this.password} /><br/>

        <button className="btn btn-primary" onClick={() => this.reset()} >Login</button> <br/>

      </div>
    )
  }
}
