import React, { Component } from 'react'
export default class App extends Component {
  state = {
    name: " ",
    address : "KLH UNIVERSITY,Aziznagar,Moinabad Road Near TS Police Academy Hyderabad, Telangana India. Pin code : 500075"
  }

  render() {
    return (
      <div>
        <center>
         <p>Hello! : {this.state.name}</p>
         <p>ROLL NO : </p>
         <p>ADDRESS : {this.state.address}</p>
         <br />
         <button onClick={() => this.setState({address :" "})}>HOME ADDRESS </button>
        </center>
      </div>
    )
  }
}