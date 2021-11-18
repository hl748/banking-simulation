const mongoose = require("mongoose")
const { Schema, model } = mongoose

const Saving = new Schema({
    username: {
        type: String,
        required: true
    },
    amount: {
        type: Number,
        required: true
    }
})

module.exports = model("Saving",Saving)