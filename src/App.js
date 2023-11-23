import React, { Component } from 'react'
import ClassComponent from './Components/Profil'

export default class App extends Component {
  constructor(){
    super();
    this.state= {
      show : false ,
    }
  }
  handleShowPerson = () => {
    this.setState({
      ...this.state,
      show: !this.state.show,
    });
  };
  render() {
    return (
      <div>
      <>
        <button
          onClick={this.handleShowPerson}
          style={{
            width: "50%",
            height: "30px",
            marginTop: "5%",
            backgroundColor: "pink",
            border: "none",
            borderRadius: "100px",
          }}
        >
          click 
        </button>

        {this.state.show ? <ClassComponent /> : null}
      </>
     
      </div>
    )
  }
}

