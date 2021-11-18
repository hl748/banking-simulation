const mongoose = require("mongoose")
const { Schema, model } = mongoose;

const Transfer = new Schema({
    payer: {
        type: String,
        required: true
    },
    payee: {
        type: String,
        required: true
    },
    amount: {
        type: Number,
        required: true
    }
})

module.exports = model("Transfer", Transfer)