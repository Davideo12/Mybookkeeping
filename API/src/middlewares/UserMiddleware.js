const User = require('../models/User/UserModel')
const MailSender = require('../services/MailSender')

module.exports = {
    register: (req, res) => {
        try {
            const user = new User({
                username: req.body.username,
                email: req.body.email,
                password: req.body.password,
                currentMoney: req.body.currentMoney
            })

            user.save( (err) => {
                if(err) {
                    res.json({
                        'succes': false,
                        'message': 'Error al guardar en la DB'
                    })
                } else {
                    console.log("[+] Usuario registrado en la DB ", req.body)
                    res.json({
                        'succes': true
                    })

                    const mailer = new MailSender("nasainsta.bot@gmail.com", "nutellavoladora")
                    mailer.sendMail(
                        user.email, 
                        "Verification for MyBookkeeping", 
                         `Hello ${user.username} \n\nWe need your confirmation for continue with MyBookkeeping registration \n\nHave a nice day!`
                    )
                }
            })
            
        } catch (error) {
            res.status(500)
        }
    },

    login: async (req, res) => {
        try {
            const user = await User.findOne({
                username: req.body.username,
                password: req.body.password
            })

            res.status(200).json(user)
        } catch (error) {
            res.status(500)
        }
    }
}