import React, { Component } from "react";
export default class Contact extends Component {
  constructor() {
    super();
    this.state = {
      image:
        "https://scontent.ftun15-1.fna.fbcdn.net/v/t39.30808-6/277519684_10158675188522823_7436488509713286219_n.jpg?_nc_cat=1&ccb=1-7&_nc_sid=5f2048&_nc_ohc=geD94IWGxZsAX92l1Sk&_nc_ht=scontent.ftun15-1.fna&oh=00_AfCZ82Srqty5A-1_ao3zyUGILA9V4E5jZZtW4dy4Ty-_MQ&oe=6565712B",
      number: 29572401,
      email: "mohamedtlili1995@hotmail.com",
    };
  }
  render() {
    return (
      <div className="card2">
        <img
          style={{ width: "50px", height: "50px" }}
          src={this.state.image}
          alt=""
        />
        <h1 className="linkd">{this.state.number}</h1>
        <h1 className="linkd">{this.state.email}</h1>
      </div>
    );
  }
}
