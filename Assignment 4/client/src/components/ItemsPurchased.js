import React from "react"
import "./Checking.css"

class ItemsPurchased extends React.Component {
    constructor(props){
        super(props)

    }

    async componentDidMount() {
        var username = localStorage.getItem("username")
    const req = {
        method: "POST",
        headers: {
            "Content-Type":"application/json"
        },
        body: JSON.stringify({
            username
        })
    }
    console.log(req)
    const response = await fetch("http://localhost:4000/getItem",req);
    console.log(response)
    const result = await response.json()
    console.log(result)

    for(var  i = 0; i < result.length; i++)
    {
        var itemHTML = document.getElementById("item").innerHTML;

        itemHTML += "username:" + result[i]['username'] + "<br>";
        itemHTML += "item name:" + result[i]['name'] + "<br>";
        itemHTML += "item price:" + "<span>" + result[i]['price'] + "</span>" + "<br>";
        
        document.getElementById("item").innerHTML = "";
        document.getElementById("item").innerHTML += itemHTML;
    }
    }
    refund = async (e) => {
        e.preventDefault()
        console.log("Hello");
        var prices = document.getElementsByTagName('span');
        var amount_prices = 0;
        var checking_amount_str = document.getElementById("checking-amount").innerHTML;
        var checking_amount_price = parseInt(checking_amount_str);
        console.log("checking price",checking_amount_price);
        for(var i = 0; i < prices.length; i++)
        {
            var price = prices[i].innerHTML;

            amount_prices += parseInt(price);
        }

        checking_amount_price += amount_prices;

        document.getElementById("checking-amount").innerHTML = checking_amount_price;
        var username = localStorage.getItem("username")
        const req = {
            
            method:"POST",
            headers: {
                "Content-Type":"application/json"
            },
            body: JSON.stringify({
                amount: checking_amount_price,
                username: username
            })
        }
        console.log(req)
        const response = await fetch("http://localhost:4000/refund",req)
        console.log(response)
        const result = response
        document.getElementById("item").innerHTML = "";
    }

    render(){
        return (
            <div id="container">
            
               <h1>Refund</h1>
               <p id="item"></p>
               <input type="button" onClick={this.refund} value="submit"></input>
            </div>
        )
    }
}

export default ItemsPurchased;
