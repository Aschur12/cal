const calculService = require('../services/calculService.js')

const calculCon = (weight, price_mat, waste, cycle, cavity, price_sells, price_lab)=>{
let pr_part_mat = price_mat * weight * (1+(waste/100))/1000;
let pr_part_lab = price_lab * cycle/(86000 * cavity)
let qua_month = 86000 * cavity * 29 / cycle_2
let cost_ua = (pr_part_mat + pr_part_lab).toFixed(4);
let profit = (price_sells - cost_ua) * qua_month;
let profitUSD = profit/calculService();
};

module.exports = calculCon;

