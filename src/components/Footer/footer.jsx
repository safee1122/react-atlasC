import React, { Component } from "react";
import "../Footer/footer.css";
import logo from "../Header/logo-header.png";
class Footer extends Component {
  render() {
    return (
      <section className="container-fluid footer">
        <div className="row">
          <div className="col text-center">
            <img src={logo} alt="logo" />
          </div>
          <div className="col-12 copy-right">
            <p>© 2022 PHOTON ATLAS | All rights reserved</p>
          </div>
        </div>
      </section>
    );
  }
}

export default Footer;
