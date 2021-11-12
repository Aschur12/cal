require('dotenv').config()
const nodemailer = require('nodemailer');

const trasport = nodemailer.createTransport({
  service: "gmail",
  auth: {
      user: process.env.EMAIL,
      pass: process.env.PASSWORD
  }  
});


const mailOptions = {
    from: 'aschur1979@gmail.com',
    to: 'aschur1979@gmail.com',
    subject: 'test',
    text: 'Письмо тест'
};
trasport.sendMail(mailOptions,(err)=>{
    console.log(err);
})