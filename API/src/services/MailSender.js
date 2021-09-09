const nodemailer = require('nodemailer')

class MailSender {
    constructor(user, password) {
        this.user = user
        this.password = password
        this.transporter = nodemailer.createTransport( {
            service: 'gmail',
            auth: {
                user: user,
                pass: password
            }
        })
    }

    sendMail(receivingMail, subject, text) {
        this.transporter.sendMail({
            from: this.user,
            to: receivingMail,
            subject,
            text
        }, (err, info) => {
            if(err) {
                console.log(err)
            } else {
                console.log("[+] Email sent: " + info.response)
            }
        })
    }
}

module.exports = MailSender