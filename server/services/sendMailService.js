require('dotenv').config()
const nodemailer = require('nodemailer');

function sendMail (user_email, user_link) {
    const trasport = nodemailer.createTransport({
        service: "gmail",
            auth: {
<<<<<<< HEAD
            user: 'henry237ukr@gmail.com',
            pass: 'kostyan22'
            }    
=======
            user: "aschur1979@gmail.com",
            pass: "Asd!1279!"
            },
            tls: {
                rejectUnauthorized: false
              }    
>>>>>>> 1c95587d66ac18822d61a667f491bb1b5025fb63
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