const XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
const xhr = new XMLHttpRequest();


const calculService = ()=>{
    xhr.open('GET', 'https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json', false);
    xhr.send();


    return JSON.parse(xhr.responseText).find((elem)=>{
     if (elem["r030"]=='840') {
         return true;
     } else {
        return false;
     }  
    }).rate
}


module.exports = calculService;
