import React, { Component } from "react";

export default class ClassComponent extends Component {
  constructor() {
    super();
    this.state = {
      name: "Mohamed Tlili",
      bio: "Gaming and Coding !!",
      img: "https://media.licdn.com/dms/image/D4D03AQEYfkys0VpdVw/profile-displayphoto-shrink_800_800/0/1696477225531?e=1706140800&v=beta&t=5fUkU4KXM_fjBH3Rrr3F6k2w568Ka-MWv31CcxNAckg",
      profession: "FullStack JS Web Developer",
      timer: 0,
    };
  }
  componentDidMount() {
    setInterval(() => {
      this.setState({ timer: this.state.timer + 1 });
    }, 1000);
  }
  render() {
    return (
      <div>
        <img src={this.state.img} alt="" />
        <h1>{this.state.name}</h1>
        <h2>{this.state.profession}</h2>
        <p>{this.state.bio}</p>
        <h2>{this.state.timer} </h2>
      </div>
    );
  }
}
