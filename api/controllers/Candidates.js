const Candidates = require('../models/Candidate');


// post candidates data to database.
exports.postCandidates = async (req, res) => {
    const { firstname, lastname, Gender, Age, State, Party} = req.body;
    const newCandidates = new Candidates({ firstname: firstname, lastname: lastname, Gender: Gender, Age: Age, State: State, Party: Party});
    newCandidates.save();
    console.log("Added Candidates to database ");
    res.status(200).redirect('http://localhost:3000/');
}