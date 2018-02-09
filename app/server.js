'use strict';

var express = require('express'),
    bodyParser = require('body-parser'),
    morgan = require('morgan'),
    sequelize = require('sequelize'),
    passport = require('passport'),
    jwt = require('jsonwebtoken'),
    path = require('path');

var hookStrategy = require('./services/PassportStrategy');

var app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(morgan('dev'));

app.use(passport.initialize());

hookStrategy(passport);

app.use(express.static(__dirname + '/../public'));

app.use('/api', require('./routes/api')(passport));


app.get('*', function(req, res) {
    res.sendFile(path.join(__dirname + '/../public/app/views/index.html'));
});

app.listen('8060', function() {
    console.log('Server running on port 8060');
});
