const mongoose = require("mongoose")
const { Schema, model } = mongoose

const Schedule = new Schema({
    amount: {
        type: Number,
        required: true
    },
    date: {
        type: Date
        // required: true
    },
    username: {
        type: String,
        required: true
    },
    type: {
        type: String
        // required: true
    }

})

module.exports = model("Schedule",Schedule)