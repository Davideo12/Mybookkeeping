const { Schema } = require('mongoose')

const userShema = new Schema({
    name: String,
    password: String,
    currentMoney: Number,
    registerDate: { type: Date, default: Date.now }
})

module.exports = userShema