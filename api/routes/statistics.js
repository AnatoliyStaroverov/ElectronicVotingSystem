const express = require('express');
const statisticsController = require('../controllers/Statistics');

const router = express.Router();

router.get = ('/statstics/:candidateId', statisticsController.getVote);

router.get = ('/statistics/all', statisticsController.getAllVote);

module.exports = router;