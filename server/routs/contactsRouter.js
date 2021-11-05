const express = require('express');
const contactsController = require('../controllers/contactsController.js');

const conRouter = express.Router();
conRouter.get('/', contactsController.getContacts)

module.exports = conRouter;