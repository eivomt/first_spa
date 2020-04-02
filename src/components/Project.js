import React, { Component } from 'react'

class Project extends Component {

  render () {
    return (
      <div className="project-wrapper">
        <div className="left">
          <div className="title">
            <h3>{this.props.title}</h3>
            <div className="line-wrapper">
              <line className="title-line"></line>
            </div>
          </div>
          <div className="paragraph">
            <p>Fictotat invellicaes voloressi omnis ut oditatur, to voluptae dolor aut parum sequi cum fuga. Name la sit, commolo reperch illabori doluptas prem que velis id unt.
            Ro occumquam quodia dolut adigenderrum quame qui blacea vererum rem endanis aspelitin excerna temque nonseque porestesed ea porro volentur solupis magnatur simus, temolorepre voluptati consequ iduciatur? Ficatat emoluptatqui unt volut ex eum fugitius quam apis et voluptatibus sequasperum sin conemporit adisquam eatiori tiasperi coreseque odis doluptatem ipsaper cipsam ut eos excepel maionet volupiti nobis quiae vel ipis eatum adissit, unt.</p>
          </div>
          <div className="buttons">
            <button className="play"></button>
            <button className="github"></button>
            <button className="read-more"></button>
          </div>
        </div>
        <div className="line-wrapper">
          <line className="middle-line"></line>
        </div>
        <div className="right">
          <div className="image"></div>
        </div>
      </div>
      )
  }
}

export default Project
