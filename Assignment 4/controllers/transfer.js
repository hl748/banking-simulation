const mongoose = require("mongoose")
const Transfer = require("../models/transfer.js")
const Account = require("../models/account.js")


exports.transfers = async (req, res) => {
    // console.log(req.body)

console.log(req.headers)
var payer = req.body.username
var payee = req.body.state.id
const payeeAcct = await Account.find({
    payee
})
const amount = req.body.state.amount
var id = payeeAcct[0].name
    const Amt = new Transfer({
        payer,
        payee: id,
        amount
    })
    console.log(Amt)
    console.log(Amt[0].payee)

    res.send(Amt)

    
  
  }

  
exports.transfers = async (req, res) => {
    // console.log(req.body)

console.log(req.headers)
var payer = req.body.username
var payee = req.body.state.id
const payeeAcct = await Account.find({
    payee
})
const amount = req.body.state.amount
var id = payeeAcct[0].name
    const Amt = new Transfer({
        payer,
        payee: id,
        amount
    })
    console.log(Amt)
    console.log(Amt[0].payee)

    res.send(Amt)

    
  
  }

  exports.trackedPayment = async (req,res) => {
      console.log(req.body)
      const username = req.body.username
      const Payments = await Transfer.find({"_id":username})
      console.log(Payments[0].amount + "tracked payment")
  }