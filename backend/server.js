const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const todoRoutes = express.Router();
const PORT = 4000;

let Voter= require('./newVoteSecure.model');
let Candidate= require('./candidate.model');

app.use(cors());
app.use(bodyParser.json());


// connection to database 
mongoose.connect('mongodb://127.0.0.1:27017/newVoteSecure', { useNewUrlParser: true });
//mongoose.connect('mongodb+srv://AnatoliyStaroverov:OU8vm34nxk2KibgW@cluster0.hcv6q.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', { useNewUrlParser: true });
const connection = mongoose.connection;
connection.once('open', function() {
    console.log("MongoDB database connection established successfully");
})

// project specific routes
todoRoutes.route('/Candidate').post(function(req, res) {
    let newCandidate = new Candidate(req.body);
    newCandidate.save()
        .then(newCandidate => {
            res.status(200).json({'candidate': 'candidate added successfully'});
        })
        .catch(err => {
            res.status(400).send('adding new candidate failed');
        });
});

todoRoutes.route('/:id').get(function(req, res) {
    let id = req.params.id;
    Todo.findById(id, function(err, todo) {
        res.json(todo);
    });
});

todoRoutes.route('/update/:id').post(function(req, res) {
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

todoRoutes.route('/add').post(function(req, res) {
    let todo = new Todo(req.body);
    todo.save()
        .then(todo => {
            res.status(200).json({'todo': 'todo added successfully'});
        })
        .catch(err => {
            res.status(400).send('adding new todo failed');
        });
});

app.use('/newVoteSecure', todoRoutes);
app.use('/newCandidate', todoRoutes);

app.listen(PORT, function() {
    console.log("Server is running on Port: " + PORT);
});