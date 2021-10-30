const User = require('../models/user.js')
const connection = require('../db/bdIn.js')
const getIpadress = require('../services/ipService.js')
const getCountry = require('../services/countryService.js')
const validator = require('validator');


addUser = async (req, res)=>{

    let bodyProperties = ['login', 'password', 'email']
    const body = req.body;
    let fullBody = true
    let str = ''

    for (property of bodyProperties){
      if (body[property].length === 0) {
        fullBody = false
        str += property + ' '
      };
    }
    
    if (!fullBody){
      return res.status(400).json({
        success: false,
        error: str + 'required',
      });
    }

    
    const user = new User(body.login, body.password, body.email);

    
    if (validator.isEmail(user.email) && validator.isStrongPassword(user.password)){
      user.ip = await getIpadress();
      user.country = await getCountry(user.ip);
      
      const text = `insert into users (login, password, email, ip, country) values ('${user.login}', '${user.password}', '${user.email}', '${user.ip}', '${user.country}')`;
      connection.promise().query(text)
      .then(() => {
        return res.status(201).json({
            success: true,
            message: 'User added',
        })
      })
      .catch(error => {
          return res.status(400).json({
              error,
              message: 'User not added',
         })
    })
  } else {
    return res.status(400).json({
      success: false,
      message: 'You entered wrong login/password',
    })
  };   
};

module.exports = {addUser};



