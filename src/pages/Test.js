import React, { Component } from "react"
import { motion } from "framer-motion"
import Typed from 'react-typed'

class Test extends Component {



    render() {

        const variants = {
            active: {
                color: "#fff"
            },
            inactive: {
                color: "#222"
            } 
        }

        return(
            <div>
                <div className="test-container">
                    <motion.div
                    className="test-inner-container"
                    animate={{
                        rotate: -10
                    }}
                    transition={{
                        // yoyo: Infinity,
                        duration: 2,
                        ease: "easeInOut"
                    }}>

                        <div className="animatedIcon"></div>
                        <div className="oCircle">
                            <div className="iCircle"/>
                        </div>
                    </motion.div>
                    <motion.div
                    className="test-inner-container2"
                    animate={{
                        rotate: -20
                    }}
                    transition={{
                        // yoyo: Infinity,
                        duration: 2,
                        ease: "easeInOut"
                    }}>

                        <div className="animatedIcon2"></div>
                    </motion.div>
                    <motion.div
                    className="test-inner-container2"
                    animate={{
                        rotate: -30
                    }}
                    transition={{
                        // yoyo: Infinity,
                        duration: 2,
                        ease: "easeInOut"
                    }}>

                        <div className="animatedIcon2"></div>
                    </motion.div>
                    <motion.div
                    className="test-inner-container2"
                    animate={{
                        rotate: 180
                    }}
                    transition={{
                        // yoyo: Infinity,
                        duration: 2,
                        ease: "easeInOut"
                    }}>

                        <div className="animatedIcon3"></div>
                    </motion.div>
                    <motion.div
                    className="test-inner-container2"
                    animate={{
                        rotate: 190
                    }}
                    transition={{
                        // yoyo: Infinity,
                        duration: 2,
                        ease: "easeInOut"
                    }}>

                        <div className="animatedIcon3"></div>
                    </motion.div>
                    <motion.div
                    className="test-inner-container2"
                    animate={{
                        rotate: 200
                    }}
                    transition={{
                        // yoyo: Infinity,
                        duration: 2,
                        ease: "easeInOut"
                    }}>

                        <div className="animatedIcon3"></div>
                    </motion.div>
                    <motion.div
                    className="test-inner-container2"
                    animate={{
                        rotate: 210
                    }}
                    transition={{
                        // yoyo: Infinity,
                        duration: 2,
                        ease: "easeInOut"
                    }}>

                        <div className="animatedIcon3"></div>
                    </motion.div>
                    <motion.div
                    className="test-inner-container2"
                    animate={{
                        rotate: 220
                    }}
                    transition={{
                        // yoyo: Infinity,
                        duration: 2,
                        ease: "easeInOut"
                    }}>

                        <div className="animatedIcon3"></div>
                    </motion.div>
                    <div className="all-text">
                        <div className="typed-container">
                            <Typed
                            strings={['Project Name']}
                            typeSpeed={40}
                            startDelay={2000}
                            showCursor={false}
                            className='typed'
                            />
                        </div>
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
                                {/* <p> */}
                                    Before we begin, take a quick look at the code for the top mask frame. You’ll see that it has been set to a height slightly larger than the font size 26, and that the y position has been moved up by the same amount. This is crucial.
                                {/* </p> */}
                            </motion.div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}

export default Test