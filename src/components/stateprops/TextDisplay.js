import React, { Component } from 'react'

export default class TextDisplay extends Component {

    state ={data:'Learning react'}
  render() {

    let myStyle={
        fontSize:20,
        color:'red',
        background:'yellow'
    }

    return (
      <div style={myStyle}>
        Welcome : {this.props.textProp}
      </div>
    )
  }
}
