const jwt = require('jsonwebtoken');
const expressJwt = require('express-jwt');
const session = require('express-session');
const bodyParser = require('body-parser');
const Saving = require("../models/saving")

const bcryptjs = require("bcryptjs");

const Account = require("../models/account");
const Checking = require("../models/checking.js")

exports.signUp = async (req, res) => {

  var sess;

  const {
    body: { username, password },
  } = req;
  console.log({ password });
  console.log({ username });
  const hashedPassword = await bcryptjs.hash({ password }.password, 12);
  const user = new Account({
    username: { username }.username,
    password: hashedPassword,
  });
  user.save();
  const checking = new Checking({
    username: { username }.username,
    amount: 0
  })
  checking.save()
  const saving = new Saving({
    username: { username }.username,
    amount: 0
  })
  saving.save()
  


  console.log("response sent");
};



// const randomString = require("randomstring")

exports.login = async (req, res) => {

  const sendError = () => {
    res.send({
      message: "User not found or password id not match",
    });
  };

  const {
    body: { username, password },
  } = req;

  const user = await Account.findOne({ username });

  if (!user) {
    return sendError();
  }

  console.log({ username })
  const isMatch = await bcryptjs.compare({ password }.password, user.password)
  console.log(isMatch)
  if (isMatch) {
   
    console.log("found");
   
      
  
    sess = req.session;

    sess.username = req.body.username;
    sess.password = req.body.password;
  

    res.send(sess);
    
  } else {
    console.log(user);
    console.log(password);
    console.log(user.password);
    console.log("not found");
    return sendError();
  }
};
