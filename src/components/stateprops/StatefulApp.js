import React, { Component } from 'react'

export default class StatefulApp extends Component {
    state={
    data:[
        {'id':101, 'name':'Krishna','balance':50000},
        {'id':102, 'name':'Advaith','balance':60000},
        {'id':103, 'name':'Leksha','balance':35000},
        {'id':104, 'name':'Ramesh','balance':30000},
        {'id':105, 'name':'Ravi','balance':20000},
    ]
    }
  render() {
    return (
      <>
        <h3 className="bg-danger"> Account Holder Details</h3>

        <table className="table table-hover table-striped">
            <tbody>
                {
                    this.state.data.map((customer,index)=>
                    <TableRow  dataProp={customer} key={index}/>       
            )       
                }
            </tbody>

        </table>

      </>
    )
  }
}

//presntation

// const TableRow=(props)=>{
//     return(       
//         <tr>
//             <td {props.dataProp.id}</td>
//             <td {props.dataProp.name}</td>
//             <td {props.dataProp.balance}</td>
//         </tr>
       
//     )
//  }


 const TableRow= (props)=>{
    return (
        <tr>
            <td>{props.dataProp.id}</td>
            <td>{props.dataProp.name}</td>
            <td>{props.dataProp.balance}</td>
        </tr>

    )
}

