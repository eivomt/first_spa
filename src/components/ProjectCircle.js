import React, { Component } from 'react'
import { motion } from 'framer-motion'
import Logo from './Logo.js'
import Icon from "@mdi/react";
import {
  mdiPlay,
  mdiGithub,
  mdiPlus
} from '@mdi/js'

class ProjectCircle extends Component {

    render() {
        return (
            <div className="project-circle-container">
                <motion.div
                className="first-motion-container"
                animate={{
                    rotate: -60
                }}
                transition={{
                    duration: 2,
                    ease: "easeInOut"
                }}>

                    <div className="moving-icon-top">
                        <motion.div className="top-button" animate={{rotate: 60}} transition={{duration: 2, ease: "easeInOut"}}>
                            <Icon className="project-icon" path={mdiGithub} title="github" size={1.5}></Icon>
                        </motion.div>
                    </div>
                    <div className="outer-ring">
                        <div className="inner-ring">
                        </div>
                    </div>
                </motion.div>

                <motion.div
                className="motion-container"
                animate={{
                    rotate: -80
                }}
                transition={{
                    duration: 2,
                    ease: "easeInOut"
                }}>
                    <div className="moving-icon-top">
                        <motion.div className="top-button" animate={{rotate: 80}} transition={{duration: 2, ease: "easeInOut"}}>
                            <Icon className="project-icon" path={mdiPlay} title="play" size={1.5}></Icon>
                        </motion.div>
                    </div>
                </motion.div>

                <motion.div
                className="motion-container"
                animate={{
                    rotate: -100
                }}
                transition={{
                    duration: 2,
                    ease: "easeInOut"
                }}>
                    <div className="moving-icon-top">
                        <motion.div className="top-button" animate={{rotate: 100}} transition={{duration: 2, ease: "easeInOut"}}>
                            <Icon className="project-icon" path={mdiPlus} title="readMore" size={1.5}></Icon>
                        </motion.div>
                    </div>
                </motion.div>

                <motion.div
                className="motion-container"
                animate={{
                    rotate: 160
                }}
                transition={{
                    duration: 2,
                    ease: "easeInOut"
                }}>

                    <div className="moving-icon-bottom"></div>
                </motion.div>

                <motion.div
                className="motion-container"
                animate={{
                    rotate: 180
                }}
                transition={{
                    duration: 2,
                    ease: "easeInOut"
                }}>
                    <div className="moving-icon-bottom"></div>
                </motion.div>

                <motion.div
                className="motion-container"
                animate={{
                    rotate: 200
                }}
                transition={{
                    duration: 2,
                    ease: "easeInOut"
                }}>
                    <div className="moving-icon-bottom"></div>
                </motion.div>

                <motion.div
                className="motion-container"
                animate={{
                    rotate: 220
                }}
                transition={{
                    duration: 2,
                    ease: "easeInOut"
                }}>
                    <div className="moving-icon-bottom"></div>
                </motion.div>

                <motion.div
                className="motion-container"
                animate={{
                    rotate: 240
                }}
                transition={{
                    duration: 2,
                    ease: "easeInOut"
                }}>
                    <div className="moving-icon-bottom"></div>
                </motion.div>
                
            </div>
        )
    }
}

export default ProjectCircle