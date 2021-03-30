const Candidate = require('../models/Candidate');



exports.getVote = async (req, res) => {
    let candidateId = req.params.candidateId; 
    const candidate = await Candidate.findById(candidateId, (candidate) => candidate);
    return candidate.get('VoteCount');
}

exports.getAllVote = async (req, res) => {
    const doc = Candidate.find({});
    let sum = 0;
    (await doc).forEach(object => {
        console.log(object);
        sum = sum + object.get('VoteCount'); 
    })

    console.log(doc);
    return sum;
}

