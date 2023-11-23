import React, { Component } from "react";
import ClassComponent from "./Components/Profil";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      show: false,
    };
  }
  showPerson = () => {
    this.setState({
      show: !this.state.show,
    });
  };
  render() {
    return (
      <div className="hero">
        <button onClick={this.showPerson}>SHOW</button>
        {/* {this.state.show ? <ClassComponent /> : null} */}
        {this.state.show && <ClassComponent />}
      </div>
    );
  }
}
