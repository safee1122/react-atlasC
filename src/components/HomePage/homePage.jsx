import React, { Component } from "react";
import Header from "../Header/header";
import Hero from "../Hero/hero";
import Mission from "../Mission/mission";
import Detail from "../Detail/detail";
import Hero2 from "../Hero2/hero2";
import Footer from "../Footer/footer";
class HomePage extends Component {
  render() {
    return (
      <div>
        <Header />
        <Hero />
        <Mission />
        <Detail />
        <Hero2 />
        <Footer />
      </div>
    );
  }
}

export default HomePage;
