import React from "react";
import "./Checking.css";

class Checkings extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      addAmount: 0,
      transferAmount: 0,
    };
  }

  async componentDidMount() {
    var username = localStorage.getItem("username");
    const req = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username }),
    };

    const response = await fetch("http://localhost:4000/checking", req);
    console.log(req.body);
    console.log(document.cookie);
    const result = await response.json();
    console.log(result);
    const amount = result[0].amount;

    document.getElementById("checking-amount").innerText = amount;
    console.log("special console: " + amount);
  }

  addAmount = async (e) => {
    e.preventDefault();
    var username = localStorage.getItem("username");
    const req = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        state: this.state,
        username,
        amount:
          document.getElementById("checking-amount").childNodes[0].nodeValue,
      }),
    };

    console.log(req);
    const response = await fetch("http://localhost:4000/addAmount", req);
    const result = await response.json();
    const addAmount = this.state.addAmount;
    var price = document.getElementById("checking-amount").innerText;
    console.log(price);
    console.log(addAmount);
    var newPrice = Number(price) + Number(addAmount);
    console.log(newPrice);
    document.getElementById("checking-amount").innerText = newPrice;
  };

  transfer = async (e) => {
    e.preventDefault();
    var username = localStorage.getItem("username");
    console.log(username);
    const req = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        state: this.state,
        username,
        amount:
          document.getElementById("checking-amount").childNodes[0].nodeValue
      })
    };

    console.log(req);
    const response = await fetch("http://localhost:4000/transfer", req);
    const result = await response.json();
    const transferAmount = this.state.transferAmount;
    var price = document.getElementById("checking-amount").innerText;
    console.log(price);
    console.log(transferAmount);
    var newPrice = Number(price) - Number(transferAmount);
    console.log(newPrice);
    document.getElementById("checking-amount").innerText = newPrice;
  };
  
  receive = async (e) => {
    e.preventDefault();
    var username = localStorage.getItem("username");
    console.log(username);
    const req = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        state: this.state,
        username,
        amount:
          document.getElementById("checking-amount").childNodes[0].nodeValue
      })
    };

    console.log(req);
    const response = await fetch("http://localhost:4000/receive", req);
    const result = await response.json();
    const transferAmount = this.state.transferAmount;
    var price = document.getElementById("checking-amount").innerText;
    console.log(price);
    console.log(transferAmount);
    var newPrice = Number(price) + Number(transferAmount);
    console.log(newPrice);
    document.getElementById("checking-amount").innerText = newPrice;
  };
  transferSavingAccounts = async (e) => {
    e.preventDefault();
    var username = localStorage.getItem("username");
    const req = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        state: this.state,
        username,
        amount:
          document.getElementById("checking-amount").childNodes[0].nodeValue,
      }),
    };
    const response = await fetch("http://localhost:4000/transferAccounts", req);
    const result = await response.json();
    const transferSaving = this.state.transferAmount;
    var price = document.getElementById("checking-amount").innerText;
    console.log(price);
    console.log(transferSaving);
    var newPrice = Number(price) - Number(transferSaving);
    console.log(newPrice);
    document.getElementById("checking-amount").innerText = newPrice;
  };
  render() {
    return (
      <>
        <div id="container">
          <h1>Checking Account</h1>
          <h2>Amount: </h2>
          <h2 id="checking-amount"></h2>

          <h2>Add Money: </h2>
          <div>
            <form>
              <input
                type="number"
                onChange={(e) => this.setState({ addAmount: e.target.value })}
                placeholder="Amount to Send"
              ></input>
              <br />
              <input
                type="submit"
                onClick={this.addAmount}
                value="Add Money"
              ></input>
            </form>
          </div>
          <h2>transfer to Saving</h2>
          <form>
            <input
              type="number"
              placeholder="Amount to Send"
              onChange={(e) =>
                this.setState({ transferAmount: e.target.value })
              }
            ></input>
            <br />
            <input
              type="submit"
              onClick={this.transferSavingAccounts}
              value="Send Money"
            ></input>
          </form>

          <div>
            <h2>Send Money</h2>
            <form>
              <input
                type="text"
                placeholder="User ID"
                onChange={(e) => this.setState({ id: e.target.value })}
                placeholder="User Id"
              ></input>
              <br />

              <input
                type="number"
                placeholder="Amount to Send"
                onChange={(e) =>
                  this.setState({ transferAmount: e.target.value })
                }
              ></input>
              <br />
              <input
                type="submit"
                onClick={this.transfer}
                value="Send Money"
              ></input>
            </form>
          </div>
          <div>
            <h2>Receive Money</h2>
            <form>
              <input
                type="text"
                placeholder="User ID"
                onChange={(e) => this.setState({ id: e.target.value })}
                placeholder="User Id"
              ></input>
              <br />

              <input
                type="number"
                placeholder="Amount to Send"
                onChange={(e) =>
                  this.setState({ transferAmount: e.target.value })
                }
              ></input>
              <br />
              <input
                type="submit"
                onClick={this.receive}
                value="Receive Money"
              ></input>
            </form>
          </div>

          <p></p>
          <p></p>
          <p></p>
        </div>
      </>
    );
  }
}

export default Checkings;
