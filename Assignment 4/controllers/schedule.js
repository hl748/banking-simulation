const mongoose = require("mongoose")
const Schedule = require("../models/schedule.js")
const Checking = require("../models/checking")

// const Expense = require()

exports.schedule = async (req, res) => {
    // console.log(req.body)
//
console.log(req.headers)
var username = req.body.username
var amount = Number(req.body.state.amount)
var type = req.body.state.type
console.log(type)
if (type == "Weekly") {
  var date = new Date (new Date().setDate (new Date().getDate () + 7)).toISOString ()
} else if (type == "biweekly") {
  var date = new Date (new Date().setDate (new Date().getDate () + 14)).toISOString ()
} else if (type == "monthly") {
  var date = new Date (new Date().setMonth (new Date().getMonth() + 1)).toISOString ()
}
console.log(date+"d")
    const Amt =  new Schedule({
        username: username,
        amount: amount,
        type: type,
        date
    })
    Amt.save()
    
  
  }

  exports.schedulePayment = async (req, res) => {
    console.log(req.body)
    var username = req.body.username
    const schedules = await Schedule.find({
      username
    })
    console.log(schedules)
  }
