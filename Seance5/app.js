const express = require('express');
const logger = require('morgan');
const createError = require('http-errors');
var path = require("path");
const chatRouter = require("./routes/chat.js");

const mongoose = require('mongoose');
const dbConfig = require('./DB/mongodb.json');

const studentRouter = require('./routes/studentR');

const app = express();

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "twig");

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/student', studentRouter);
app.use('/chat', chatRouter);

app.use((req, res, next)=>{
  next(createError(404));
});

mongoose.set('strictQuery', true);
mongoose.connect(dbConfig.mongo.uri);

module.exports = app;