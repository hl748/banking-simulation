const mongoose = require("mongoose")
const Payment = require("../models/payment.js")
const Checking = require("../models/checking")


exports.payment = async (req, res) => {
    // console.log(req.body)

console.log(req.headers)
console.log(req.body)
console.log("request:"+req)
var username = req.body.username
console.log(req.body)


var name= req.body.state.name
var price = req.body.state.price
var username = req.body.username
console.log(name+price)
console.log(name)
console.log(price)
    const Amt = new Payment({
        name,
        price,
        username
    })
    Amt.save()

    var AmtOwn = await Checking.find({username})
    var addAmt = Number(req.body.state.price)
    var highAmt = AmtOwn[0].amount
    console.log(highAmt)
    var lowAmt = Number(highAmt) - Number(addAmt)
    if(lowAmt >= 0)
    {
        const subtract = await Checking.updateOne({username},{ $set:{ amount: lowAmt } });
        // console.log(Amt)
        // console.log(Amt[0].name)
        res.send(Amt)
    }
    else
    {
        console.log("LowAmt is low than 0")
    }
    

    
  
  }

exports.getItem = async (req,res) =>{
    console.log("testgetitem")
    const username = req.body.username
    console.log(username)
    const item = await Payment.find({username})
    console.log("Bought Items", item)
    console.log(Payment.find())
    res.send(item)
}

exports.refund = async (req,res) => {
    const { body: { username, amount } } = req;
    console.log({ username })
    console.log({ amount })
    const expense = await Payment.find({ username })
    const update = await Checking.updateOne({ username },{$set:{amount:{ amount }.amount}})
    console.log(update)
    
    console.log(expense[0].price)
   
    const updatedExpense = await Payment.deleteOne({ username })
 

    res.send(updatedExpense);
}

