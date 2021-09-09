const { Schema } = require('mongoose')

const transactionSchema = new Schema({
    userId: { 
        type: String, 
        required: true
    },
    name: {
        type: String, 
        default: 'Transaction', 
        maxlength: 255
    },
    label: {
        type: String, 
        default: 'Undefined Transaccion'
    },
    transactionType: {
        type: String, 
        required: true
    },
    amount: {
        type: String, 
        required: true
    },
    date: { 
        type: Date, 
        default: Date.now 
    },
    note: {
        type: String,
        maxlength: 1024        
    }
})

module.exports = transactionSchema