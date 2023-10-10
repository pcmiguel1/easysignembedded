const express = require('express');
var path = require('path');
const app = express();
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const cookieParser = require("cookie-parser");

const session = require("express-session")
const admin = require('firebase-admin');

const bodyParser = require('body-parser');



const indexRouter = require('./routes/indexRouter');



dotenv.config();
app.use(cookieParser());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//Middleware
app.set('view engine', 'ejs'); // ejs
app.set('views', path.join(__dirname, '/public'));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));


app.use(express.static(path.join(__dirname, 'public')));


//Route Middleware

app.use('/', indexRouter);

port = process.env.PORT || 3000
app.listen(port, () => console.log('Server Up and running'));

module.exports = app;