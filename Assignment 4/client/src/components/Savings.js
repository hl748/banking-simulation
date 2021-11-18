import React from "react";

class Savings extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      addAmount: 0,
      transferAmount: 0,
      id: "",
    };
  }

  async componentDidMount() {
    console.log("test");
    var username = localStorage.getItem("username");
    const req = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username }),
    };

    const response = await fetch("http://localhost:4000/saving", req);
    console.log(req.body);
    console.log(document.cookie);
    const result = await response.json();
    console.log(result);
    const amount = result[0].amount;

    document.getElementById("saving-amount").innerText = amount.toString();
    console.log(amount);
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
          document.getElementById("saving-amount").childNodes[0].nodeValue,
      }),
    };

    console.log(req);
    const response = await fetch("http://localhost:4000/addSavingAmount", req);
    const result = await response.json();
    const addAmount = this.state.addAmount;
    var price = document.getElementById("saving-amount").innerText;
    console.log(price);
    console.log(addAmount);
    var newPrice = Number(price) + Number(addAmount);
    console.log(newPrice);
    document.getElementById("saving-amount").innerText = newPrice;
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
          document.getElementById("saving-amount").childNodes[0].nodeValue,
      }),
    };

    console.log(req);
    const response = await fetch(
      "http://localhost:4000/transferSavingAccounts",
      req
    );
    const result = await response.json();
    var price = document.getElementById("saving-amount").innerText;
    console.log(price);
    const transferSaving = this.state.transferAmount;
    console.log(transferSaving);
    var newPrice = Number(price) - Number(transferSaving);
    console.log(newPrice);
    document.getElementById("saving-amount").innerText = newPrice;
  };

  transferCheckingAccounts = async (e) => {
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
          document.getElementById("saving-amount").childNodes[0].nodeValue,
      }),
    };
    console.log(req);
    const response = await fetch("http://localhost:4000/transferAccounts",req);
    console.log("res:" + response);
    const result = await response.json();
    const transferSaving = this.state.transferAmount;
    var price = document.getElementById("saving-amount").innerText;
    console.log(price);
    console.log(transferSaving);
    var newPrice = Number(price) - Number(transferSaving);
    console.log(newPrice);
    document.getElementById("saving-amount").innerText = newPrice;
  };
  render() {
    return (
      <div id="container">
        <h1>Saving Account</h1>
        <h2>Amount: </h2>
        <h2 id="saving-amount"></h2>
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
        <h2>transfer to Checking</h2>
        <form>
          <input
            type="number"
            placeholder="Amount to Send"
            onChange={(e) => this.setState({ transferAmount: e.target.value })}
          ></input>
          <br />
          <input
            type="submit"
            onClick={this.transfer}
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
              onClick={this.transferCheckingAccounts}
              value="Send Money"
            ></input>
          </form>
        </div>
        <p></p>
        <p></p>
        <p></p>
      </div>
    );
  }
}

export default Savings;
