import React, { Component } from "react";
import "../Detail/detail.css";
import img1 from "../Detail/Photon-Atlas-Icon-Graphics-02-p-500 1.png";
import img2 from "../Detail/Photon-Atlas-Icon-Graphics-03 1.png";
import img3 from "../Detail/Photon-Atlas-Icon-Graphics-04 1.png";
class Detail extends Component {
  render() {
    return (
      <div className="container-fluid detail">
        <div className="row">
          <div className="col offset-md-1 offset-xl-2 mt-5">
            <img className="img-fluid" src={img1} alt="" />
            <h1>WHO WE ARE</h1>
            <p>
              Photon Atlas is a Human Resources Network for the Safex
              Blockchain, Safex Market, and the <br />
              Xcalibra cryptocurrency exchange. We recruit and curate the best
              blockchain software and <br />
              development talent to support the companies in our ethos and their
              long-term growth.
            </p>
          </div>
        </div>
        <div className="row mt-4">
          <div className="col offset-md-1 offset-xl-2 mt-5">
            <img className="img-fluid" src={img2} alt="" />
            <h1>OUR COMPANIES</h1>
            <p style={{ color: "#f6e391" }}>
              Safex is a privacy blockchain and Safex Market is an open-source
              <br />
              decentralized marketplace platform using the Safex e-commerce
              protocol.
            </p>
            <br />
            <p>
              Xcalibra is a high-performance crypto exchange and fully compliant
              platform where <br />
              you can buy and trade Safex, Bitcoins, Ethereum and other
              cryptocurrencies.
            </p>
          </div>
        </div>
        <div className="row mt-4">
          <div className="col offset-md-1 offset-xl-2 mt-5">
            <img className="img-fluid" src={img3} alt="" />
            <h1>Talent Acquisition Network</h1>
            <p>
              Photon Atlas is searching for high quality candidates interested
              in an opportunity to lead in <br />
              defining the approach and architecture of the technology that will
              change the world. <br />
              Candidates will collaborate in a local Denver office alongside the
              passionate visionaries <br />
              leading these efforts.
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Detail;
