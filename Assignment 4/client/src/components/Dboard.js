import React from "react"
import Checkings from "./Checkings"
import Savings from "./Savings"
import Schedule from "./ScheduledPayments.js"
import Items from "./Items.js"
import ItemsPurchased from "./ItemsPurchased"
import TrackedPayment from "./TrackedPayment"

class Dboard extends React.Component {
    constructor(props){
        super(props)

       
    }
    render(){
        return (
            <>
            <h1>Welcome, {localStorage.getItem("username")}</h1>
               <Checkings />
                <Items /> 
               <Savings />
               <ItemsPurchased />
               
               <Schedule />
               
               
                <p></p>
                <p></p>
                <p></p>
            
            </>
        )
    }
}

export default Dboard