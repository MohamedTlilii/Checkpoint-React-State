import React, { Component } from "react";

export default class Profil extends Component {
  constructor() {
    super();
    this.state = {
      image:
        "https://media.licdn.com/dms/image/D4D03AQEYfkys0VpdVw/profile-displayphoto-shrink_800_800/0/1696477225531?e=1706140800&v=beta&t=5fUkU4KXM_fjBH3Rrr3F6k2w568Ka-MWv31CcxNAckg",
      name: "Mohamed Tlili",
      profession: "FullStack JS Web Developer",
      bio: "Gaming & Coding",
      timer : 0,
    };
  }
componentDidMount() {
  setInterval(() => {
    this.setState({timer : this.state.timer +1})
  }, 1000);
}
  render() {
    return (
      <div className="card">
        <img src={this.state.image} alt="" />
        <h1>{this.state.name}</h1>
        <h1>{this.state.profession}</h1>
        <p>{this.state.bio}</p>
        <h1 className="timer">{this.state.timer}</h1>
      </div>
    );
  }
}



