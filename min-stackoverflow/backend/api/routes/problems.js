const express = require('express');
const { createProblem } = require('../controllers/problems');
const router = express.Router();

router.post('/create', createProblem);

module.exports = router;
