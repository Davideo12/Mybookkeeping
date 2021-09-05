const User = require('../models/User/UserModel')

module.exports = {
    register: (req, res) => {
        try {
            const user = new User({
                username: req.body.username,
                password: req.body.password,
                age: req.body.age
            })

            user.save( (err) => {
                if(err) {
                    res.json({
                        'succes': false,
                        'message': 'Error al guardar en la DB'
                    })
                } else {
                    res.json({
                        'succes': true
                    })
                }
            })
            
        } catch (error) {
            res.status(500)
        }
    },

    login: (req, res) => {
        try {
            
        } catch (error) {
            res.status(500)
        }
    }
}