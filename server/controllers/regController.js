const User = require('../models/user.js')
const connection = require('../db/bdIn.js')
const getIpadress = require('../services/ipService.js')
const getCountry = require('../services/countryService.js')


addUser = (req, res)=>{

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
    user.ip = getIpadress();
    user.country = getCountry(user.ip);
    const text = `insert into users (login, password, email, ip, country) values ('${user.login}', '${user.password}', '${user.email}', '${user.ip}', '${user.country}')`;
    
    connection.promise().query(text)
    .then(() => {
      return res.status(201).json({
          success: true,
          id: movie._id,
          message: 'User added',
      })
    })
    .catch(error => {
        return res.status(400).json({
            error,
            message: 'User not added',
        })
  })   
};

module.exports = {addUser};



