import React from "react"


export default class SignUp extends React.Component {
    constructor(props){
        super(props)

        this.state = {
            username: "",
            password: ""
        }
    }

    onSubmit = async (e) => {
        e.preventDefault()
        var req = {
            method: "POST",
            headers: {
                "Content-Type":"application/json"
            },
            body: JSON.stringify(this.state)
        }
        console.log("anything")
        var response = await fetch("http://localhost:4000/signup",req)
        var result = await response.json()
        console.log(result)
        console.log(response)
    }

    onLogin = async (e) => {
        e.preventDefault()
        const req = {
            method: "POST",
            headers: {
                "Content-Type":"application/json"
            },
            body: JSON.stringify(this.state)
            // 'withCredentials':true
            
        }
        console.log("anything")
        const response = await fetch("http://localhost:4000/login",req)
        const result = await response.json()
        // document.cookice = "username=" + this.state.username
        console.log("something");
        console.log(result.username);
        console.log(response);

        localStorage.setItem("username",result.username)
        // document.cookie = `username=${result.username}`
    }

    render() {
        return (
            <form class="container">
                <label>Username</label>
                <input type="text" onChange={e => {this.setState({ username: e.target.value })}} ></input><br/><br/>
                <label>Password</label>
                <input type="password"  onChange={e => {this.setState({ password: e.target.value})}} ></input><br/>
                <input type="submit" onClick={this.onSubmit} value="Sign Up"></input>
                <input type="submit" onClick={this.onLogin} value="Login"></input>
            </form>
        )
    }
}
