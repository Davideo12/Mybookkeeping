/*
    Author: Jesús David Elizondo
    Date: 26/August/2021
*/

const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const express = require('express')
const app = express()

const PORT = 5000

main()
    .catch(err => {
        console.log(err)
    })

async function main() {
    await mongoose.connect('mongodb://localhost:27017/test')

    await app.use(bodyParser.urlencoded({extended: false}))
    await app.use(bodyParser.json())

    await app.use(require('./routes/routes'))

    await app.listen(PORT, () => {
        console.log(`[+] Servidor online \n[i] URL: http://localhost:${PORT}/`)
    })
}
