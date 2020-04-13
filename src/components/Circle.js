import React, { Component } from 'react'
import {Motion, spring} from 'react-motion';

class Circle extends Component {

    render() {
        return (
            <div>
                <Motion defaultStyle={{x: 10}} style={{x: spring(150)}}>
                    {value => 
                        <div className="circle-container">
                            <div>
                                <svg style={{positon:"absolute", top: value.x, left: value.x}} width={value.x} height={value.x} viewBox="0 0 150 150" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M150 75C150 116.421 116.421 150 75 150C33.5786 150 0 116.421 0 75C0 33.5786 33.5786 0 75 0C116.421 0 150 33.5786 150 75Z" fill="white"/>
                                </svg>
                            </div>
                        </div>
                    }
                </Motion>
                
            </div>
        )
    }
}

export default Circle

