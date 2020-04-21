import React, { Component } from "react"
import ProjectCircle from '../components/ProjectCircle.js'
import Text from '../components/Text.js'
import TypedTitle from '../components/TypedTitle.js'

class Test extends Component {



    render() {

        return(
            <div>
                <TypedTitle/>
                <ProjectCircle/>
                <Text/>
            </div>
        )
    }

}

export default Test