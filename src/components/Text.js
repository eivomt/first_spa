import React, { Component } from 'react'
import Typed from 'react-typed'
import { motion } from 'framer-motion'

class Text extends Component {

    
    render() {

        const variants = {
            active: {
                color: "#fff"
            },
            inactive: {
                color: "#222"
            } 
        }

        return (
            <div className="project-description"> 
                <motion.div
                className="motion-paragraph"
                variants={variants}
                animate="active"
                transition={{
                    duration: 4,
                    delay: 3,
                    ease: "easeInOut"
                }}>
                    Before we begin, take a quick look at the code for the top mask frame. You’ll see that it has been set to a height slightly larger than the font size 26.
                </motion.div>
            </div>
        )
    }
}

export default Text


