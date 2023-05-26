const express = require('express');
const logger = require('morgan');
const createError = require('http-errors');
var path = require("path");
const partieRouter = require('./routes/partie.js');

const mongoose = require('mongoose');
const dbconfig = require('./DB/mongodb.json');

const joueurRouter = require ('./routes/JoueurRoute');
// const partieRouter = require ('./routes/partieRoute');


const app = express();

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "twig");

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/user', joueurRouter);
app.use('/partie', partieRouter);
// app.use('/partie', partieRouter);


app.use((req, res, next) => {
    next(createError(404));
    }
);

mongoose.set('strictQuery', true);
mongoose.connect(dbconfig.mongo.uri);

module.exports = app;