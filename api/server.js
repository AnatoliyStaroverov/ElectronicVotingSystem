const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const cors = require('cors');
require('dotenv').config();
const registerRoute = require('./routes/Register');
const candidateRoute = require('./routes/Candidate');
const statisticsRoute = require('./routes/Statistics');
const { default: Candidates } = require('../client/src/components/Candidates');
const app = express();

app.use(cors());

app.set('view engine', 'ejs');
app.set('views', './src/pages');

app.use(express.urlencoded({ extended: false }));

app.use('/static', express.static(path.join(`${__dirname}/public`)));

app.use('/register', registerRoute);

app.use('/candidate', candidateRoute);

app.use('/statistics', statisticsRoute);

const port = process.env.PORT || 8080;

var mongoDb = 'mongodb://127.0.0.1:27017/SecureVote';
mongoose.connect(mongoDb, {useNewUrlParser: true, useUnifiedTopology: true});


var db = mongoose.connection;

//Bind connection to error event (to get notification of connection errors)
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
