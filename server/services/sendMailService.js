require('dotenv').config()
const nodemailer = require('nodemailer');

function sendMail (user_email, user_link) {
    const trasport = nodemailer.createTransport({
        service: "gmail",
            auth: {
            user: "aschur1979@gmail.com",
            pass: "Asd!1279!"
            },
            tls: {
                rejectUnauthorized: false
              }    

    });
    const mailOptions = {
        from: process.env.EMAIL1,
        to: user_email,
        subject: 'Подтверждение регистрации',
        text: 'Пройдите по ссылке для подтверждения регистрации',
        html: `<a href="http://localhost:3000/reg/verification/${user_link}">ПОДТВЕРДИТЬ</a>`,

    };
    console.log(user_email);
    trasport.sendMail(mailOptions,(err)=>{
        console.log(err);
    });
    trasport.close() 
}


module.exports = {sendMail}