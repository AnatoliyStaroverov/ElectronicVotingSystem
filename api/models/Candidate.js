const mongoose = require('mongoose');

const CandidateSchema = mongoose.Schema({

    firstname: {
        type: String,
        required: true,
    },
    lastname: {
        type: String,
        required: true,
    },
    Gender: {
        type: String,
        required: true,
    },
    Age: {
        type: Number,
        required: true,
    },
    State: {
        type: String,
        required: true,
    },
    Party: {
        type: String,
        required: true,
    },
    VoteCount: {
        type: Number,
        required: true,
    }
});

module.exports = mongoose.model('canidate', CandidateSchema);