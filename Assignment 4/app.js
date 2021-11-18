const express = require("express")
const mongoose = require("mongoose")
const path = require("path")
const cors = require("cors")
const session = require("express-session")
const mongodbStore = require("connect-mongodb-session")(session)

const bcryptjs = require("bcryptjs");

const Account = require("./models/account.js");
const Checking = require("./models/checking.js")
const Saving = require("./models/saving.js")
var passport = require('passport')



const cookieParser = require("cookie-parser")

const app = express()
const router = require("./routers/router.js")
const MONGODB_URI = "mongodb+srv://henryliu:Aurora98@cluster0.6e8rr.mongodb.net/Project0?retryWrites=true&w=majority"

const store = new mongodbStore({
    uri: MONGODB_URI,
    collection: "session"
})


app.use(express.urlencoded());
app.use(express.json());
app.use(cors())
app.use(cookieParser())

app.use(
    session({
        resave: false,
        saveUninitialized: true,
        store,
        secret: 'my secret'
    })
)
app.use(passport.initialize());
  app.use(passport.session());

const isAuth = (req, res, next) => {
    if (!req.session.isLoggedIn){
        res.redirect("/login")
    } else {
        next()
    }
}

app.use(router)




app.get("/",(req,res)=>{
    console.log(req.cookies)
    res.sendFile(path.join(__dirname, "./index.html"))
}) 



app.get("/test", isAuth, (req,res)=>{

    console.log("testings")
})

mongoose.connect(MONGODB_URI).then(
    app.listen(4000)
)