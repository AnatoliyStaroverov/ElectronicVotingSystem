const Voter = require('../models/Voter');


// post voter data to database.
exports.postVoter = async(req,res) =>{
    const {firstname,lastname,username,City,State,ZipCode} = req.body;
    const newVoter = new Voter({firstname:firstname,lastname:lastname,username:username,City:City,State:State,ZipCode:ZipCode});
    newVoter.save();
    console.log("Added Voter to database ");
    res.status(200).redirect('http://localhost:3000/');
}