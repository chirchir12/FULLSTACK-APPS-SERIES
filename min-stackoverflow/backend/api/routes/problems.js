const express = require('express');
const { createProblem, ProblemsList } = require('../controllers/problems');
const router = express.Router();

router.post('/create', createProblem);
router.get('/list', ProblemsList);

module.exports = router;
