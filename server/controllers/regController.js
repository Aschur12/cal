const User = require('../models/user.js')
const connection = require('../bd/bdIn.js')
const getIpadress = require('../services/ipService.js')
const getCountry = require('../services/countryService.js')


addUser = (req, res)=>{
    const body = req.body;
    if (Object.keys(body).length === 0) {
        return res.status(400).json({
            success: false,
            error: 'Вы не ввели login/password',
        });
    };
    let error_inn;
    const user = new User(body.login, body.password, body.email);
    user.ip = getIpadress();
    user.country = getCountry(user.ip);
    const text = `insert into users (login, password, email, ip, country) values ('${user.login}', '${user.password}', '${user.email}', '${user.ip}', '${user.country}')`;
    
    connection.promise().query(text)
      .then( ([rows,fields]) => {
    console.log(rows);
  })
  .catch(console.log)
    
    
    
    
    // connection.query(text, function(err,result) {
    //     if (err) {
    //         console.log(err);
    //       error_inn = err;
    //     }
    // });
    
    console.log(error_inn);
   if (error_inn) {
       return res.status(400).json({
        success: false,
        error: 'Вы не ввели login',
    });
   }   
   return res.status(201).json({
            success: true,
            message: 'User added',
            });  
};

module.exports = {addUser};



