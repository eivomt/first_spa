import React, { Component } from 'react'
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
                    delay: 2.3,
                    ease: "easeInOut"
                }}>
                    This is a web application that helps people find or create events. The goal of the project was to enable people who suffer from loneliness to easily connect with strangers and make new friends.
                </motion.div>
            </div>
        )
    }
}

export default Text


