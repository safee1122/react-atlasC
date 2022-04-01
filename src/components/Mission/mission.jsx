import React, { Component } from "react";
import "./missionStyle.css";
class Mission extends Component {
  render() {
    return (
      <div>
        <div className="container-fluid mission">
          <h1>Our Mission</h1>
          <p>
            We aim to cultivate a community of decentralized innovators <br />
            who are leading the blockchain revolution into the future.
          </p>
        </div>
      </div>
    );
  }
}

export default Mission;
