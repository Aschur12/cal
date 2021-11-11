const express = require('express');
const calculConstoller = require('../controllers/calculateController.js');

const calculRouter = express.Router();
calculRouter.post('/', calculConstoller.calculCon);
calculRouter.get('/', calculConstoller.calculGet);

module.exports = calculRouter;
