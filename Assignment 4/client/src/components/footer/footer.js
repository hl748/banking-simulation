import React from "react"

class Footer extends React.Component{
    constructor(){
        super()
    }

    componentDidUpdate() {
        console.log("component updated!")
    }

    componentDidMount() {
        console.log("component mounted!")
    }

    render(){
        return (
            <div>
                <h2>Banking Simulation</h2>
            </div>
        )
    }
}

export default Footer