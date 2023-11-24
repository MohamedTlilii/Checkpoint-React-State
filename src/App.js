import "./App.css";
import React, { Component } from "react";
import Profil from "./Components/Profil";
import Contact from "./Components/Contact";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      show: false,
      now: false,
    };
  }

  showperson = () => {
    this.setState({ show: !this.state.show });
  };
  nowcard = () => {
    this.setState({ now: !this.state.now });
  };

  render() {
    return (
      <div className="App">
        <button className="button" onClick={this.showperson}>
          PROFIL
        </button>
        {this.state.show && <Profil />}

        <button className="button" onClick={this.nowcard}>
          CONTACT
        </button>
        {this.state.now && <Contact />}
      </div>
    );
  }
}

