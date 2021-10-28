
const XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
const xhr = new XMLHttpRequest();

getIpadress = ()=>{

    xhr.open('GET', 'https://api.ipify.org', false);
    xhr.send();
        
    return xhr.responseText
};

module.exports = getIpadress;


