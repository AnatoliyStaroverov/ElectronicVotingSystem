const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Candidate = new Schema({
    firstname: {
        type: String,
        required: true,
    },
    lastname: {
        type: String,
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
    },
});

module.exports = mongoose.model('newCandidate', Candidate);