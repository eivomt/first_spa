import React, { Component } from 'react'
import Icon from "@mdi/react";
import {
  mdiPlay,
  mdiGithub,
  mdiPlus
} from '@mdi/js'
import Circle from './Circle.js'


class Project extends Component {
  

  render () {
   

    
    let technologies = Array.from(this.props.technologies)
    
    let technologiesList = technologies.map((item) => (
      <li>{item}</li>
    ))

    return (
      <div className="container">
        <div className="circle-container">
          <div className="circle-outer"></div>
          <div className="circle-inner"></div>
        </div>
        <ul className="cta">
          <button className="play">
              <Icon className="project-icon" path={mdiPlay} title="play" size={1.5}></Icon>
          </button>
          <button className="github">
            <Icon className="project-icon" path={mdiGithub} title="github" size={1.5}></Icon>
          </button>
          <button className="readMore">
              <Icon className="project-icon" path={mdiPlus} title="readMore" size={1.5}></Icon>
          </button>
        </ul>
        <ul className="technologies">
          {technologiesList}
        </ul>
        <div className="text">
          <h2 className="project-title">{this.props.title}</h2>
          <p className="summary">{this.props.summary}</p>
        </div>
        <Circle></Circle>
      </div>
      )
  }
}

export default Project
