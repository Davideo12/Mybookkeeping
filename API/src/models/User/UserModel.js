const mongoose = require('mongoose')
const userSchema = require('./UserSchema')

const User = mongoose.model('User', userSchema)

module.exports = User