const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const cors = require('cors');
require('dotenv').config();

const registerRoute = require('./routes/Register');
const candidateRoute = require('./routes/Candidate');

// Create express app instance.
const app = express();

app.set('view engine', 'ejs');
app.use(cors());
app.use(express.urlencoded({ extended: false }));

// All routes used in app.
app.use('/register', registerRoute);
app.use('/candidate', candidateRoute);

// Connect to database.
const port = process.env.PORT || 8080;
var mongoDb = 'mongodb://127.0.0.1:27017/SecureVote';
mongoose.connect(mongoDb, {useNewUrlParser: true, useUnifiedTopology: true});
var db = mongoose.connection;

//Bind connection to error event (to get notification of connection errors)
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
