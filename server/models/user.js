
module.exports = class User {
    constructor (login, password, email, ip, country) {
        this.login = login
        this.password = password
        this.email = email
        this.ip = ip
        this.country = country
    };
    
};