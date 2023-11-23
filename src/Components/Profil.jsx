import React, { Component } from "react";

export default class ClassComponent extends Component {
  constructor() {
    super();
    this.state = {
      name: "Mohamed Tlili",
      bio: "Gaming and Coding !!",
      img:
        "https://media.licdn.com/dms/image/D4D03AQEYfkys0VpdVw/profile-displayphoto-shrink_800_800/0/1696477225531?e=1706140800&v=beta&t=5fUkU4KXM_fjBH3Rrr3F6k2w568Ka-MWv31CcxNAckg",
      profession: "FullStack JS Web Developer",
      show: true,
 timer: 0,
    };
  }
  componentDidMount() {
    setInterval(() =>this.state({timer:this.state.timer + 1}), 1000);
  }
  render() {
    return <div>
        {this.state.show && (<>
        <h1>{this.state.name}</h1>
        <p>{this.state.bio}</p>
        <img src={this.state.img} alt="" />
        <p>{this.state.profession}</p>
        <h2>{this.state.timer}</h2>
        </>
        )}
    </div>;
  }
}



