const mongoose = require('mongoose');
const { Schema, model } = mongoose

const account = new Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    }
})

module.exports = model("Account", account)