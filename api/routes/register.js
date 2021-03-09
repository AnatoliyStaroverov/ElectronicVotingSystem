// Route to register voter.

const express = require('express');
const registerController = require('../controllers/Register');
const router = express.Router();

router.post('/register',registerController.postVoter);


module.exports = router;