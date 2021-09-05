const express = require('express')
const router = express.Router()

const transactions = require('../middlewares/TransactionsMiddleware')
const user = require('../middlewares/UserMiddleware')


router.get('/', (req, res) => {
    res.status(200).json({ 'message' : 'MyBookkeeping by Jesús David Elizondo' });
});

router.get('/test', transactions.test)

router.post('/transaction/active', transactions.active)

router.post('/transaction/passive', transactions.passive)

router.get('/transactions', transactions.getTransactions)

router.delete('/transaction')

router.post('/newUser', user.register)

module.exports = router