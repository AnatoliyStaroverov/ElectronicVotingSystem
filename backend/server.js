const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const todoRoutes = express.Router();
const PORT = 4000;

let Voter= require('./models/newVoteSecure.model');
let Candidate= require('./models/candidate.model');

app.use(cors());
app.use(bodyParser.json());

// connection to database 
mongoose.connect('mongodb://127.0.0.1:27017/newVoteSecure', { useNewUrlParser: true });
//mongoose.connect('mongodb+srv://AnatoliyStaroverov:OU8vm34nxk2KibgW@cluster0.hcv6q.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', { useNewUrlParser: true });
const connection = mongoose.connection;
connection.once('open', function() {
    console.log("MongoDB database connection established successfully");
})

/** 
 * const db = require("./models");
db.mongoose
  .connect(db.url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log("Connected to the database!");
  })
  .catch(err => {
    console.log("Cannot connect to the database!", err);
    process.exit();
  });
 * 
*/
// project specific routes
todoRoutes.route('/addCandidate').post(function(req, res) {
    let newCandidate = new Candidate(req.body);
    newCandidate.save()
        .then(newCandidate => {
            res.status(200).json({'candidate': 'candidate added successfully'});
        })
        .catch(err => {
            res.status(400).send('adding new candidate failed');
        });
});

// get all canidates
todoRoutes.route('/getAlladdCandidate').get(function(req, res) {
    Candidate.find(function(err, Candidate) {
        if (err) {
            console.log(err);
        } else {
            res.json(Candidate);
        }
    });
});

// get canidate by state
todoRoutes.route('getCandidate/:state').get(function(req, res) {
    let id = req.params.state;
    Candidate.findById(id, function(err, Candidate) {
        res.json(Candidate);
    });
});

// get canidate by party
todoRoutes.route('getCandidate/:party').get(function(req, res) {
    let id = req.params.party;
    Candidate.findById(id, function(err, Candidate) {
        res.json(Candidate);
    });
});

// get canidate by VoteCount
todoRoutes.route('getCandidate/:VoteCount').get(function(req, res) {
    let id = req.params.VoteCount;
    Candidate.findById(id, function(err, Candidate) {
        res.json(Candidate);
    });
});




// App specific routes
todoRoutes.route('/Register').post(function(req, res) {
    let newVoter = new Voter(req.body);
    newVoter.save()
        .then(newVoter => {
            res.status(200).json({'todo': 'todo added successfully'});
        })
        .catch(err => {
            res.status(400).send('adding new todo failed');
        });
});


// to be implemented update canidate
todoRoutes.route('/updateCanidate/:id').post(function(req, res) {
    Todo.findById(req.params.id, function(err, todo) {
        if (!todo)
            res.status(404).send("data is not found");
        else
            todo.todo_description = req.body.todo_description;
            todo.todo_responsible = req.body.todo_responsible;
            todo.todo_priority = req.body.todo_priority;
            todo.todo_completed = req.body.todo_completed;

            todo.save().then(todo => {
                res.json('Todo updated!');
            })
            .catch(err => {
                res.status(400).send("Update not possible");
            });
    });
});

// stats Routes .
// 1. Get state winners
// 2. get party winners 

// Canidate Routes
// 1. display vote count per state
// 2. display vote count per party of state.

app.use('/newVoteSecure', todoRoutes);
app.use('/Candidate', todoRoutes);

app.listen(PORT, function() {
    console.log("Server is running on Port: " + PORT);
});