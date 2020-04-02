import React, { Component } from "react";
import Logo from '../components/Logo.js';
import Project from '../components/Project.js';

class Home extends Component {
  render() {
    return (
      <div className="home-wrapper">
        <div className="hero-wrapper">
          <div className="logo-wrapper">
            <Logo id="Logo" name="logo" />
          </div>
          <div className="hero-text">
            <h1>Eivind Hauge Omtveit</h1>
            <h3>Full stack developer</h3>
          </div>
          <circle></circle>
        </div>
        <div className="bottom-wrapper">
          <Project title="Plus U"></Project>
          <Project title="Forget Me Not"></Project>
          <Project title="Sodoku"></Project>
        </div>
      </div>

    );
  }
}

export default Home;
