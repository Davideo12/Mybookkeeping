const { Schema } = require('mongoose')

const transactionSchema = new Schema({
    name: {type: String, default: 'Transaction'},
    label: String,
    transactionType: String,
    amount: Number,
    date: { type: Date, default: Date.now },
    note: String
})

module.exports = transactionSchema