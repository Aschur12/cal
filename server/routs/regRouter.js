const express = require('express');
const regConstoller = require('../controllers/regController.js');

const regRouter = express.Router();
regRouter.post('/', regConstoller.addUser);


module.exports = regRouter;