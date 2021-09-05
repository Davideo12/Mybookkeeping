const mongoose = require('mongoose')
const transactionSchema = require('./TransactionSchema')

const Transaction = mongoose.model('Transaction', transactionSchema)

module.exports = Transaction