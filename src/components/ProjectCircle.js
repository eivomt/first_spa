import React, { Component}  from 'react'
import { withRouter } from 'react-router-dom';
import { motion } from 'framer-motion'
import Icon from "@mdi/react";
import {
  mdiPlay,
  mdiGithub,
  mdiPlus,
  mdiLanguageRubyOnRails,
  mdiLanguageRuby,
  mdiLanguageJavascript,
  mdiLanguageHtml5,
  mdiSass
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
                        <a href="https://github.com/eivomt/loner_app" target="_blank">
                            <motion.div className="top-button" animate={{rotate: 60}} transition={{duration: 2, ease: "easeInOut"}}>
                                <Icon className="project-icon" path={mdiGithub} title="github" size={1.5}/>
                            </motion.div>
                        </a>
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

                    <div className="moving-icon-bottom">
                        <motion.div className="top-button" animate={{rotate: -160}} transition={{duration: 2, ease: "easeInOut"}}>
                            <Icon className="project-icon" path={mdiLanguageRuby} title="Ruby" size={0.8}></Icon>
                        </motion.div>
                    </div>
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
                    <div className="moving-icon-bottom">
                        <motion.div className="top-button" animate={{rotate: -180}} transition={{duration: 2, ease: "easeInOut"}}>
                            <Icon className="project-icon" path={mdiLanguageRubyOnRails} title="RubyOnRails" size={0.8}></Icon>
                        </motion.div>
                    </div>
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
                    <div className="moving-icon-bottom">
                        <motion.div className="top-button" animate={{rotate: -200}} transition={{duration: 2, ease: "easeInOut"}}>
                            <Icon className="project-icon" path={mdiLanguageJavascript} title="javascript" size={0.8}></Icon>
                        </motion.div>
                    </div>
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
                    <div className="moving-icon-bottom">
                        <motion.div className="top-button" animate={{rotate: -220}} transition={{duration: 2, ease: "easeInOut"}}>
                            <Icon className="project-icon" path={mdiLanguageHtml5} title="HTML5" size={0.8}></Icon>
                        </motion.div>
                    </div>
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
                    <div className="moving-icon-bottom">
                        <motion.div className="top-button" animate={{rotate: -240}} transition={{duration: 2, ease: "easeInOut"}}>
                            <Icon className="project-icon" path={mdiSass} title="sass" size={0.8}></Icon>
                        </motion.div>
                    </div>
                </motion.div>
                
            </div>
        )
    }
}

export default ProjectCircle