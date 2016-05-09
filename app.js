var express = require('express');
var load = require('express-load');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');

//Connect for database
mongoose.connect('mongodb://localhost/site');
var db = mongoose.connect;

var app = express();

app.set('view engine','jade');
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());

load('models')
    .then('controllers')
    .then('routes')
    .into(app);


app.listen(3000, function () {
    console.log('Running project');
});