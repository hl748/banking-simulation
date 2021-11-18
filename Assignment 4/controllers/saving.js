const mongoose = require("mongoose")
const Saving = require("../models/saving.js")
const ObjectId = require("mongodb").ObjectId



exports.savingAccount = async (req, res) => {


console.log(req.headers)
    var username = req.body.username
    console.log(username)
    const Amt = await Saving.find({ username })
    console.log(Amt)


    res.send(Amt)

    
  
  }

  
exports.addSavingAccount = async (req, res) => {
    console.log(req.body)
    const username = req.body.username
    var addAmt = Number(req.body.state.addAmount)

    var oldAmt = req.body.amount
    var newAmt = Number(oldAmt) + Number(addAmt)
  const Amt = await Saving.updateOne({ username },{ $set: { amount:newAmt } });
  const userAmt = await Checking.updateOne({ username },{ $set: { username }})
  const userAmount = await Checking.updateOne({ username },{ $set: { username }})
  console.log(Amt)
  res.send(Amt)
//   console.log(Checking.find(username))
}


exports.transferSavingAccount = async (req, res) => {
    
    console.log(req.body)
    var username = req.body.username
    const User = await Checking.find({
      username
     })
     console.log(User)
    var id = req.body.state.id
    var id = new ObjectId(id)
    var id =User._id
    console.log("an id eg"+{ id }.id)
  const Amt = await Checking.find({
   "_id":id
  })
console.log(/*"our saving acct:"*/User)
  var username = req.body.username
    console.log("current " +username)
    var addAmt = Number(req.body.state.transferAmount)

    var oldAmt = User[0].amount
    console.log("the amt"+oldAmt)
    var newAmt = Number(oldAmt) + addAmt
    console.log(`${oldAmt} turns into ${newAmt}`)
    var id = req.body.state.id
    var updateUser = await Checking.updateOne({username}, {$set:{amount: newAmt}})
  const transfer = await Saving.updateOne({"_id":id},{ $set:{ amount: newAmt } });
  console.log(transfer)
  const CurrentUser = await Saving.find({
    username
   })
   console.log(CurrentUser + "save")
   var a = CurrentUser[0].amount
   console.log(a)
   var addAmt = addAmt
   var lowAmt = Number(a) - Number(addAmt)
   const CurrentUpdate = await Saving.updateOne({username},{$set:{amount:lowAmt}})
   console.log(CurrentUpdate)
  res.send(a)
  console.log(Checking.find(username))

}
const Checking = require("../models/checking.js")

exports.transferToChecking = async (req, res) => {
  console.log(req.body +"bodytest")
    var username = req.body.username
  const Amt = await Checking.find({username })
  var AmtOwn = await Saving.find({username})
  var highAmt = AmtOwn[0].amount
    var addAmt = Number(req.body.state.transferAmount)
    console.log(highAmt)
    console.log(addAmt)
    var validation = highAmt - addAmt

    
    console.log("validation")
    var newAmt = Number(req.body.state.transferAmount)

    var oldAmt = Amt[0].amount
    console.log(oldAmt)
    var newAmt = Number(oldAmt) + addAmt
    var oldAmt = Number(oldAmt) + newAmt
    var oldAmt = Number(newAmt) + oldAmt
    console.log(`${oldAmt} turns into ${newAmt}`)
if(validation > 0){
  console.log(validation)
  var transfer = await Checking.updateOne({ username },{ $set:{ amount: newAmt } });
  var lowAmt = Number(highAmt) - Number(addAmt)
  var subtract = await Saving.updateOne({username},{ $set:{ amount: lowAmt } });
}
  
  console.log(transfer)
  
  
  
  console.log(subtract)
  res.send(subtract)
}