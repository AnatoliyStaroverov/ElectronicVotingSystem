const mongoose = require('mongoose');

const AnimeSchema = mongoose.Schema({

    name: {
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