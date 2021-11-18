const mongoose = require("mongoose")
const { Schema, model } = mongoose

const Payment = new Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    username: {
        type: String,
        required: true
    }
})

module.exports = model("Payment",Payment)