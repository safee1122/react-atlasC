import React, { Component } from "react";
import "./hero2.css";
import "../Hero/hero.css";
import sub from "./Subtract.png";
import v1 from "./Vector.png";
import v2 from "./Vector2.png";
class Hero2 extends Component {
  render() {
    return (
      <div className="hero-container2">
        <div className="hero-content pt-5">
          <p>
            As our companies grow, finding the best talent is our first
            priority.
          </p>
          <div className="d-flex flex-column align-items-center">
            <button className>join us</button>
          </div>
          <p>Follow</p>
          <div className="text-center">
            <img src={v1} alt="..." />
            <img src={sub} alt="..." />
            <img src={v2} alt="..." />
          </div>
        </div>
      </div>
    );
  }
}

export default Hero2;
