const express = require('express');
const registerController = require('../controllers/Candidates');

const router = express.Router();

router.post('/candidate', registerController.postCandidates);


module.exports = router;
