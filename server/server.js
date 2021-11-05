const express = require('express');
const app = express();
const mainRouter = require('./routs/mainRouter.js');
const regRouter = require('./routs/regRouter.js');
const bodyP = require('body-parser');
const conRouter = require('./routs/contactsRouter.js');

app.use(bodyP.urlencoded({ extended: true }));
app.use(bodyP.json());
app.use('/', mainRouter);
app.use('/reg', regRouter);
app.use('/con', conRouter);

app.listen(3000);
