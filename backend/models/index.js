const dbConfig = require("../config/db.config.js");

const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

const db = {};
db.mongoose = mongoose;
db.url = dbConfig.url;
db.Canidate = require("./candidate.model")(mongoose);
db.Voter = require("./newVoteSecure.model")(mongoose);


module.exports = db;