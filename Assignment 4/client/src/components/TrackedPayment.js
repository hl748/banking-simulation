import React from "react"
import "./Checking.css"

class TrackedPayment extends React.Component {
    constructor(props){
        super(props)
    }
    async componentDidMount() {
        var req = {
            method: "POST",
            headers: {
                "Content-Type":"application/json"
            },

        }
        console.log("anything")
        var response = await fetch("http://localhost:4000/trackedpayment",req)
        var result = await response.json()
        console.log(result)
        console.log(response)
    }
    
    render(){
        return(
                <div id="container">
                <h1>Received Money from Others</h1>
                <p id="received-money"></p>
                </div>
        )
    }
}

export default TrackedPayment