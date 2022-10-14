import React, { Component } from 'react'

export default class ChildParentInvoke extends Component {

    state={data:'initial data '}

    updateState(event){

    }
    

    

  render() {
    return (
      <div className="bg-info">
        <h2 className="bg-success">Parent component</h2>
        <h3>Data :{this.state.data}</h3> <br/>
        <h2>Child component</h2>
        <Content dataProp={this.state.data} updateStateProp={(event)=>this.updateState(event)}/>
        <br/>
        <ContentSibling dataProp={this.state.data} />

      </div>
    )
  }
}

//-----------

const Content =(props)=> {
  return(
    <div>
        search : <input type="text" value={props.dataProp} onChange={props.updateStateProp} />
    </div>
  )
}

//----------------

const ContentSibling=(props)=>{

}
