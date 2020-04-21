import React, { Component } from "react";

class About extends Component {
  render() {
    return (
      <div className="about-wrapper">
        <div className="about-left">
          <div className="title">
            <h3>About</h3>
            <div className="line-wrapper">
            </div>
          </div>
          <div className="about-paragraph">
            <div className="about-text">
              <p>I'm a full-stack developer.</p>
              <p>Don't listen to Erlend.</p>
              <p>I promise you,</p>
              <p>I totally am.</p>
            </div>
          </div>
        </div>
        <div className="about-right">
          <div className="about-image"></div>
        </div>
    </div>
    );
  }
}

export default About;
