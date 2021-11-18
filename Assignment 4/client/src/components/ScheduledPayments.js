import React from "react"
import "./Checking.css"

class Schedule extends React.Component {
    constructor(props){
        super(props)

        this.state = {
            type: "",
            amount:0
        }
      
     
    }
    onSubmit = async (e) => {
        e.preventDefault()
       
       
    
   
        console.log("LowAmt is low than 0")
    var username = localStorage.getItem("username")
        var req = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body:JSON.stringify({
                state: this.state,
                username
                
            })
        }
        console.log(req)
        var response = fetch("http://localhost:4000/schedule",req)
        console.log(response)
        var req = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body:JSON.stringify({
                state: this.state,
                username
                
            })
        }
        console.log(req)
    
        console.log(response)

    }
        
    
    render() {
        return (
            <div id="container">
                <form>
                    <input type="number" placeholder="Amount" onChange={e=>this.setState({ amount: e.target.value })}></input><br/>
                    <input type="radio" value="weekly" onClick={e=>this.setState({ type: e.target.value})} id="weekly" value="Weekly" name="schedule"></input>
                    <label>Weekly</label><br/>
                    <input type="radio" value="biweekly" onClick={e=>this.setState({ type: e.target.value})} id="biweekly" value="biweekly" name="schedule"></input>
                    <label>Biweekly</label><br/>
                    <input type="radio" value="monthly" onClick={e=>this.setState({ type: e.target.value})} id="monthly" value="monthly" name="schedule"></input>
                    <label>Monthly</label><br/>
                    <input type="submit" onClick={this.onSubmit}></input>
                  
                </form>
            </div>
        )
        }
    }

export default Schedule;
    
