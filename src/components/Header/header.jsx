import React, { Component } from "react";
import "../Header/headerStyle.css";
import logo from "./logo-header.png";
import "bootstrap/js/dist/button";
import "bootstrap/js/dist/collapse";
class Header extends Component {
  render() {
    return (
      <div>
        <div>
          <div className="logoContainer">
            <div className="logo">
              <img className="img-fluid" src={logo} alt="logo" />
            </div>
          </div>
        </div>
        <button
          id="btn"
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon">
            <div className="line1" />
            <div className="line1" />
            <div className="line1" />
          </span>
        </button>
      </div>
    );
  }
}

export default Header;
