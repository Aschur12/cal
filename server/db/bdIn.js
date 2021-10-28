const MySQL = require('mysql2');

const connection = MySQL.createConnection({
    host: "aschurix.beget.tech",
      user: "aschurix_login",
      database: "aschurix_login",
      password: "Aschur1279!",
     // ssh: "aschurix@aschurix.beget.tech"
     port: "3306",
});
connection.query("SET SESSION wait_timeout = 604800");
module.exports = connection;