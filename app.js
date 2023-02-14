const express = require('express'); 

const logger = require('morgan');

const mongoose = require('mongoose');

const createError = require('http-errors');

const contactsRouter = require('./routes/contacts.js');

const dbconfig = require('./database/mongodb.json');

const app = express();

app.use(logger('dev'));

app.use(express.json());

app.use(express.urlencoded({ extended: false }))

app.use('/contact', contactsRouter);

mongoose.connect(dbconfig.mongo.uri);

app.use((req , res , next ) => {

    next(createError(404));

})



module.exports = app;

