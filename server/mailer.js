require('dotenv').config()
const nodemailer = require('nodemailer');

function sendMail () {
    const trasport = nodemailer.createTransport({
        service: "gmail",
            auth: {
            user: process.env.EMAIL,
            pass: process.env.PASSWORD
            }    
    });
    const mailOptions = {
        from: process.env.EMAIL,
        to: 'aschur1979@gmail.com',
        subject: 'Вложение файла',
        text: 'Письмо тест',
        // attachments: [{
        //     filename: 'vlad.png',
        //     path: __dirname + '/vlad.png'
        // }
            
        // ]
    };
    trasport.sendMail(mailOptions,(err)=>{
        console.log(err);
    });
    trasport.close() 
}

sendMail();