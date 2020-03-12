import React, {Component} from 'react';
import Logo from './Logo.js'
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import Home from "../Home";
import About from "../About";
import Contact from "../Contact";

class Navbar extends Component {

  render() {
    return (
        <ul className="header">
          <li><NavLink exact to="/"><Logo id="header-logo"/></NavLink></li>
          <div className="header-text">
            <li><NavLink to="/about">About</NavLink></li>
            <li><NavLink to="/contact" className="nav-text">Contact</NavLink></li>
          </div>
        </ul>
      )
  }
}

export default Navbar
