const Transaction = require('../models/Transaction/TransactionModel')
const User = require('../models/User/UserModel')

module.exports = (() => {

    async function _currentMoneyRefresh(userId, type, amount) {
        amount = parseFloat(amount)

        const userData = await User.findOne({ id: userId })
        
        if(type == "active") {
            await User.updateOne( { id: userId }, { currentMoney: (userData.currentMoney + amount)})
    
        } else if (type == "passive") {
            await User.updateOne( { id: userId }, { currentMoney: (userData.currentMoney - amount)})
        }
    }

    return {
        getTransactions: async (req, res) => {
            try {
                const all = await Transaction.find({ userId: req.body.userId})
                res.status(200).json(all)
            } catch (error) {
                res.status(500)
            }
        },
    
        active: (req, res) => {
            try {
                const active = new Transaction ({
                    userId: req.body.userId,
                    name: req.body.name,
                    label: req.body.label,
                    transactionType: 'active', // La transaccion es un activo 
                    amount: req.body.amount,
                    note: req.body.note
            
                })
            
                active.save( (err) => {
                    if(err) {
                        console.log(err)
                        res.status(500)
                    } else {
                        _currentMoneyRefresh(active.userId, active.transactionType, active.amount)
                        res.status(200).json({
                        succes: true,
                        transaccion: active
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
                    userId: req.body.userId,
                    name: req.body.name,
                    label: req.body.label,
                    transactionType: 'passive', // La transaccion es un passivo
                    amount: req.body.amount,
                    note: req.body.note
            
                })
            
                passive.save( (err) => {
                    if(err) {
                        console.log(err)
                        res.status(500)
                    } else {
                        _currentMoneyRefresh(passive.userId, passive.transactionType, passive.amount)
                        res.status(200).json({
                        succes: true,
                        transaccion: passive
                    })
                    }
                })
    
            } catch (error) {
                res.status(500).json(error)
            }
        }
    }
})()