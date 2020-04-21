import React, { Component } from 'react'
import Typed from 'react-typed'

class TypedTitle extends Component {

    render() {
        return (
            <div className="title">
                <Typed
                strings={['Plus U']}
                typeSpeed={40}
                startDelay={2000}
                showCursor={false}
                className='typed'
                />
            </div>
        )
    } 
}

export default TypedTitle