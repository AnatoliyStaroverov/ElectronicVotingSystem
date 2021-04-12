const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Voter = new Schema({
    firstname: {
        type: String,
        required: true,
    },
    lastname: {
        type: String,
        required: true,
    },
    username: {
        type: String,
        required: true,
    },
    City: {
        type: String,
        required: true,
    },
    State: {
        type: String,
        required: true,
    },
    ZipCode: {
        type: Number,
        required: true,
    }
});

module.exports = mongoose.model('Voter', Voter);