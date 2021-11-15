require('dotenv').config()
const nodemailer = require('nodemailer');

function sendMail () {
    const trasport = nodemailer.createTransport({
        service: "gmail",
            auth: {
            user: 'henry237ukr@gmail.com',
            pass: 'kostyan22'
            }    
    });
    const mailOptions = {
        from: process.env.EMAIL,
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