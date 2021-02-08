const mongoose = require('mongoose');

const VoterSchema = mongoose.Schema({

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
    },
});

module.exports = mongoose.model('series', VoterSchema);