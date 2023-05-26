const express = require('express');
const logger = require('morgan');
const createError = require('http-errors');

const mongoose = require('mongoose');
const dbconfig = require('./DB/mongodb.json');

const profRouter = require('./routes/prof');

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/prof', profRouter);

app.use((req, res, next) => {
    next(createError(404));
    }
);

mongoose.set('strictQuery', true);
mongoose.connect(dbconfig.mongo.uri);

module.exports = app;