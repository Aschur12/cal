require('dotenv').config()
const nodemailer = require('nodemailer');

function sendMail () {
    const trasport = nodemailer.createTransport({
        service: "gmail",
            auth: {
            user: process.env.EMAIL1,
            pass: process.env.PASSWORD
            },
            tls: {
                rejectUnauthorized: false
              }    
    });
    const mailOptions = {
        from: process.env.EMAIL1,
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
console.log(process.env.EMAIL);