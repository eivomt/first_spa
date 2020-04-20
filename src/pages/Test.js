import React, { Component } from "react"
import { motion } from "framer-motion"

class Test extends Component {

    render() {
        return(
            <div>
                <div className="test-container">
                    <motion.div
                    classNamer="test-inner-container"
                    animate={{
                        rotate: 360
                    }}
                    transition={{
                        yoyo: Infinity,
                        duration: 2,
                        ease: "easeInOut"
                    }}>

                        <div className="animatedIcon"></div>
                        <div className="oCircle">
                            <div className="iCircle"/>
                        </div>
                        {/* <motion.div 
                            className="testCircle"
                            animate={{
                                rotate: 180
                            }}
                            transition={{
                                yoyo: Infinity,
                                duration: 2,
                                ease: "easeInOut"
                            }}>
                        </motion.div> */}
                    </motion.div>
                </div>
            </div>
        )
    }

}

export default Test