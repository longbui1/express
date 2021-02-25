const nodemailer = require('nodemailer')
require('dotenv').config()

const index = async(req, res) => {
    res.render('admin/mailer/sendMail')
}

const sendEmail = async(req, res) => {
    let transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 587,
        secure: false,
        auth: {
            user: process.env.USER_EMAIL,
            pass: process.env.PASSWORD_EMAIL
        },
    });

    let info = await transporter.sendMail({
        form: process.env.USER_EMAIL,
        to: req.body.toEmail,
        subject: req.body.subject,
        text: req.body.message,
    });

    transporter.sendMail(info, function(err, data) {
        if (err) {
            console.log(err);
        } else {
            console.log("send email" + data.response);
        }
    })
}

module.exports = {
    index,
    sendEmail
}