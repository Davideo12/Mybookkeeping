const Transaction = require('../models/Transaction/TransactionModel')
const User = require('../models/User/UserModel')

function editCurrentMoney(id, type, amount) {
    User.findById(id, (err, adventure) => {
        console.log(adventure)
    })
}

module.exports = {

    test: async (req, res) => {
        const data = await User.findById("6133b36158742e7032463809").exec()
        console.log(data)
    },
    
    getTransactions: async (req, res) => {
        try {
            const filter = {}
            const all = await Transaction.find(filter)
            res.status(200).json(all)
        } catch (error) {
            res.status(500)
        }
    },

    deleteTransaction: async (req, res) => {
        try {
            const filter = {}
            await Transaction.deleteOne(filter);
            res.status(204)
        } catch (error) {
            res.status(500).json(error)
        }
    },

    active: (req, res) => {
        try {
            const active = new Transaction ({
                name: req.body.name,
                label: req.body.label,
                transactionType: 'active', // La transaccion es un activo 
                amount: req.body.amount,
                note: req.body.note
        
            })
        
            active.save( (err) => {
                if(err) {
                    res.json({
                        'succes': false
                    })
                } else {
                    res.json({
                        'succes': true
                    })
                }
            })
        } catch (error) {
            res.status(500).json(error)
        }
    },

    passive: (req, res) => {
        try {
            const passive = new Transaction ({
                name: req.body.name,
                label: req.body.label,
                transactionType: 'passive', // La transaccion es un passivo
                amount: req.body.amount,
                note: req.body.note
        
            })
        
            passive.save( (err) => {
                if(err) {
                    res.json({
                        'succes': false
                    })
                } else {
                    res.json({
                        'succes': true
                    })
                }
            })
        } catch (error) {
            res.status(500).json(error)
        }
    }
}