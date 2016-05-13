var express = require('express'),
    load = require('express-load'),
    mongoose = require('mongoose'),
    bodyParser = require('body-parser');

//Connect for database
mongoose.connect('mongodb://localhost/site');
var db = mongoose.connect;


var app = express();


app.set('view engine', 'jade');
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());
app.use(express.static('public'));
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header('Access-Control-Allow-Methods', 'PUT,GET,POST,DELETE');
    next();
});

load('models')
    .then('controllers')
    .then('routes')
    .into(app);

app.listen(3000, function () {
    console.log('Running project');
});