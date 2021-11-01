
const XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
const xhr = new XMLHttpRequest();

getCountry = (ip)=>{

    xhr.open('GET', 'http://ip-api.com/json/' + ip, false);
    xhr.send();
    
    return JSON.parse(xhr.responseText)['country'];
};

module.exports = getCountry;




