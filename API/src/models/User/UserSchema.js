const { Schema } = require('mongoose')

const userShema = new Schema({
    username: {
        type: String, 
        required: true,
        maxlength: 255
    },
    email: {
        type: String, 
        required: true,
        maxlength: 1024
    },
    password: {
        type: String, 
        required: true, 
        minlength:6
    },
    currentMoney: {
        type: Number
    },
    registerDate: { 
        type: Date, 
        default: Date.now 
    }
})

module.exports = userShema