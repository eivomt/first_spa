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
        </div>
        <div className="bottom-wrapper">
          <Project title="Plus U" summary="This is a web application that helps people find or create events. The goal of the project was to enable people who suffer from loneliness to easily connect with strangers and make new friends." features={["Registration", "Login", "Geocoding"]} technologies={["Ruby", "Rails", "postgreSQL", "Javascript", "HTML5", "CSS", "Sass" ]}github="https://github.com/eivomt/loner_app"></Project>
          <Project title="Forget Me Not" summary="This is a product design project I did at KADK. The premise of the project was to choose a product to disassemble and redesign. I chose an old camera and redesigned it to be a beginners camera which would teach the user the basics of photography through experimentation" features={["Filter toggle", "Shutter speed selection", "Apperture selection", "Unique image format", "Tilt-independency"]} technologies={["Rhinoceros 5", "Grasshopper", "Adobe suite"]}></Project>
        </div>
      </div>
      

    );
  }
}

export default Home;
