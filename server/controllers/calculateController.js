const calculService = require('../services/calculService.js')

calculCon = (req,res)=>{
    const body = req.body;
    let pr_part_mat = (body.price_mat * body.weight * (1+(body.waste/100)))/1000;
    let pr_part_lab = body.price_lab * body.cycle/(86000 * body.cavity)
    let qua_month = 86000 * body.cavity * 29 / body.cycle
    let cost_ua = (pr_part_mat + pr_part_lab).toFixed(4);
    let profit = (body.price_sells - cost_ua) * qua_month;
    let profitUSD = profit/calculService();
    console.log(profit)
return res.status(201).json({
    quantity: qua_month, cost_ua: cost_ua, profit_ua: profit, profit_usd: profitUSD 
})
};

calculGet = (req,res)=>{
    res.send('Hello');
}

module.exports = {calculCon, calculGet};

