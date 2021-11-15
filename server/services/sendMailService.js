require('dotenv').config()
const nodemailer = require('nodemailer');

function sendMail () {
    const trasport = nodemailer.createTransport({
        service: "gmail",
            auth: {
            user: 'aschur1979@gmail.com',
            pass: 'Aschur121979!'
            },
            tls: {
                rejectUnauthorized: false
              }    
    });
    const mailOptions = {
        from: 'aschur1979@gmail.com',
        to: 'aschur1979@gmail.com',
        subject: 'Вложение файла',
        text: 'Письмо тест',

    };
    trasport.sendMail(mailOptions,(err)=>{
        console.log(err);
    });
    trasport.close() 
}

sendMail();
console.log(process.env.EMAIL)