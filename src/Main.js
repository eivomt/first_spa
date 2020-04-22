import React, { Component } from "react";
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Test from "./pages/Test"
import Test2 from "./pages/Test2"
import Logo from './components/Logo.js';


class Main extends Component {
  render () {
    return (
      <HashRouter>
        <div>
          <div className="header-container">
            <ul className="header">
              <li><NavLink exact to="/"><Logo id="header-logo"/></NavLink></li>
              <div className="header-text">
                  <li><NavLink to="/test" className="nav-text">Test</NavLink></li>
                  <li><NavLink to="/test2" className="nav-text">Links</NavLink></li>
                  <li><NavLink to="/about" className="nav-text">About</NavLink></li>
                  <li><NavLink to="/contact" className="nav-text">Contact</NavLink></li>
              </div>
            </ul>
          </div>
          <div className="content">
            <Route exact path="/" component={Home}/>
            <Route path="/about" component={About}/>
            <Route path="/contact" component={Contact}/>
            <Route path="/test" component={Test}/>
            <Route path="/test2" component={Test2}/>
          </div>
        </div>
      </HashRouter>
    );
  }
}

export default Main;
