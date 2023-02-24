const express = require('express');
const logger = require('morgan');
const createError = require('http-errors');

const mongoose = require('mongoose');
const dbConfig = require('./DB/mongodb.json');

const studentRouter = require('./routes/studentR');

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/student', studentRouter);

app.use((req, res, next)=>{
  next(createError(404));
});

mongoose.set('strictQuery', true);
mongoose.connect(dbConfig.mongo.uri);

module.exports = app;