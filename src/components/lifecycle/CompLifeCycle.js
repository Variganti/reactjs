import React, { Component } from 'react'

export default class CompLifeCycle extends Component {

    state={data:0,msg:'initial data'}

    updateState(e){
        this.setState({data:this.state.data+1})
    }

  render() {
    return (
      <div className="bg-warning">
        <h3 className="text-danger">Parent component</h3>
        <button onClick={(e)=>this.updateState(e)} className="btn btn-success">
            INCREMENT
        </button>
        <h4>count : {this.state.data} </h4>

        <Child dataProp={this.state.data}></Child>
      </div>
    )
  }
}


//Child Component

class Child extends Component {
    //1. Initialization
    constructor(props){
        super(props)
        this.state={name:'krishna'}
        console.log("In Constructor",props.dataProp)
    }

    //2. Render
   
    render() {
        return (
        <div className='text-dark'>
    <h2 className='text-primary'>Child Component</h2>
    Counter : <h3 id="txtCounter"> {this.props.dataProp}</h3> <br/>
    City : {this.state.address} <br/>
     Email: {this.state.email}
        </div>
        )
  }

  //3. Component did mount

  componentDidMount(){
     //Fired only once
     //here write ajax call to rest API logic to intilize data
     //Subscribe to web sockets and observables here
     //register custom events here

     console.log("In CDM",this.props.dataProp)
  }

  //4.gDSFP
  static getDerivedStateFromProps(props,state){
    // this method is called everytime whenstate/props changes
    // i can make ajaxcall by passing props parameter is query string for live data
    //Validation for props/state

    //console.log("in gDFSP : " , props.dataProp + '-'+ state.name)

    console.log(`in gDFSP  ${props.dataProp} - ${state.name} -${state.address} - ${state.email}`)
    return { address : 'hyderabad', email:'k@g.com'}


  }

  //5.shouldComponentUpdate

  shouldComponentUpdate(props,state){
     // this is fired everytime when state /props are changed
     // decide wether to rerender ornot
     console.log(`in SCU  ${props.dataProp} - ${state.name} -${state.address} - ${state.email}`)
     if(props.dataProp>5)
     return true
     else
     return false
  }

  componentDidCatch(error){
    console.log('some error',error)
  }

  componentDidUpdate(){
    //you can access REAL DOM here
    //fired every time
    console.log('cdu',document.getElementById("txtCounter").innerText)

  }

  componentWillUnmount(){
    //fired only once
    // unsubscribe websockets, observable clean the cache to avoid memeory leaks
    console.log("component removed")

  }

}


