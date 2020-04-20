import React, { Component } from 'react'
import { motion } from "framer-motion"

class Circle extends Component {

    render() {
        return (
            <motion.div
            className="test"
            animate={{
                rotate: 360
            }}
            transition={{duration: 2}}>
                <svg viewBox="0 0 150 150" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M150 75C150 116.421 116.421 150 75 150C33.5786 150 0 116.421 0 75C0 33.5786 33.5786 0 75 0C116.421 0 150 33.5786 150 75Z" fill="white"/>
                </svg>
            </motion.div>
        )
    }
}

export default Circle

