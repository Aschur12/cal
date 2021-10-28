
const XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
const xhr = new XMLHttpRequest();

let urlCountry = 'http://ip-api.com/json/';


getCountry = (ip)=>{
    urlCountry = urlCountry + ip;
    // console.log(urlCountry);
    xhr.open('GET', urlCountry, false);
    xhr.send();
    return JSON.parse(xhr.responseText)['country'];
};

module.exports = getCountry;




