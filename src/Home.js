import React, { Component } from "react";
import Logo from './components/Logo.js';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faLinkedIn} from '@fortawesome/free-regular-svg-icons'

class Home extends Component {
  render() {
    return (
      <div className="home-wrapper">
        <div className="logo-wrapper">
          <Logo id="Logo" name="logo" />
        </div>
        <h1>Eivind Hauge Omtveit</h1>
        <h3>Full stack developer</h3>
      </div>

    );
  }
}

export default Home;
