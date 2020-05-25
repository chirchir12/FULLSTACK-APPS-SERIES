const express = require('express');
const {
  createProblem,
  ProblemsList,
  getSingleProblem,
} = require('../controllers/problems');
const router = express.Router();

router.post('/create', createProblem);
router.get('/list', ProblemsList);
router.get('/list/:id', getSingleProblem);

module.exports = router;
