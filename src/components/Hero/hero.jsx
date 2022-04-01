import React, { Component } from "react";
import "./hero.css";
class Hero extends Component {
  render() {
    return (
      <div className="hero-container">
        <nav className="navbar navbar-expand-md navbar-dark">
          <div className="container-fluid">
            <div
              className="collapse navbar-collapse justify-content-center"
              id="navbarNavAltMarkup"
            >
              <div className="navbar-nav">
                <a className="nav-link active" aria-current="page" href="#">
                  Home
                </a>
                <a className="nav-link" href="#">
                  Careers
                </a>
                <a className="nav-link" href="#">
                  About
                </a>
                <a className="nav-link" href="#">
                  Contact
                </a>
              </div>
            </div>
          </div>
        </nav>
        <div className="hero-content">
          <h1>The electronic civilization</h1>
          <p>
            Cryptocurrency Transforming Physical Lives in <br /> Digital Realm
          </p>
          <div className="d-flex flex-column align-items-center">
            <button className>join us</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Hero;
