import React, { Component } from "react"
import Icon from "@mdi/react"
import {
    mdiGithub
  } from '@mdi/js'
  import { motion } from 'framer-motion'

class Test extends Component {

    constructor(props) {
        super(props)
        this.state = {clicked: false, answered: false}
        this.handleClick = this.handleClick.bind(this)
        this.handleQuestion = this.handleQuestion.bind(this)
    }

    handleClick(e, aComponent) {
        console.log(e.target)
        if (this.state.clicked) {
            e.target.innerHTML = "Click me to change what i say"
            this.setState({clicked: false})
        } else {
            e.target.innerHTML = "Okay I changed"
            this.setState({clicked: true})
        }
    }

    handleQuestion(e) {
        if (this.state.answered) {
            e.target.innerHTML = "Where am I?"
            this.setState({answered: false})
        } else {
            e.target.innerHTML = window.location.href
            this.setState({answered: true})
        }
    }

    handleLink(e) {
        console.log(window.location)
    }

    render() {

        return(
            <div>
                <h1>Link-Testing page</h1>
                <p onClick={this.handleClick}>Click me to change what i say</p>
                <p onClick={this.handleQuestion}>Where am I?</p>
                <motion.div
                animate={{x: 100}}
                transition={{duration: 2}}>
                    <a href="https://github.com/eivomt/loner_app" target="_blank">
                        <Icon className="project-icon" path={mdiGithub} title="github" size={1.5}/>
                    </a>
                </motion.div>
            </div>
        )
    }

}

export default Test