const express = require('express')
const router = express.Router()

const transactions = require('../middlewares/TransactionsMiddleware')
const user = require('../middlewares/UserMiddleware')


router.get('/', (req, res) => {
    res.status(200).json({ 'message' : 'MyBookkeeping by Jesús David Elizondo' });
});

router.post('/transaction/active', transactions.active)

router.post('/transaction/passive', transactions.passive)

router.get('/transactions', transactions.getTransactions)

router.post('/register', user.register)

router.post('/login', user.login)

module.exports = router