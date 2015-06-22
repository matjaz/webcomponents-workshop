var express = require('express');
var logger = require('morgan');
var bodyParser = require('body-parser');
var cors = require('cors');

var books = require('./routes/books');

var app = express();

app.use(logger('dev'));
app.use(cors());
app.use(bodyParser.json());

app.use('/api/books', books);

module.exports = app;
