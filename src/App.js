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
      ...this.state,
      show: !this.state.show,
    });
  };
  render() {
    return (
      <div>
        <button onClick={this.showPerson}>SHOW</button>

        {this.state.show ? <ClassComponent /> : null}
      </div>
    );
  }
}
