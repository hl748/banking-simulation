const mongoose = require("mongoose")
const { Schema, model } = mongoose

const Checking = new Schema({
    username: {
        type: String,
        required: true
    },
    amount: {
        type: Number,
        required: true
    }
})

module.exports = model("Checking",Checking)