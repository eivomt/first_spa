import React, { Component } from "react";
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Logo from './components/Logo.js';
import Navbar from './components/Navbar'


class Main extends Component {
  render () {
    return (
      <HashRouter>
        <div>
          <Navbar />
          <div className="content">
            <Route exact path="/" component={Home}/>
            <Route path="/about" component={About}/>
            <Route path="/contact" component={Contact}/>
          </div>
        </div>
      </HashRouter>
    );
  }
}

export default Main;
