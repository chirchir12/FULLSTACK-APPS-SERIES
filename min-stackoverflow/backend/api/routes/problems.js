const express = require('express');
const {
  createProblem,
  ProblemsList,
  getSingleProblem,
  updateProblem,
} = require('../controllers/problems');
const router = express.Router();

router.post('/create', createProblem);
router.get('/list', ProblemsList);
router.get('/list/:id', getSingleProblem);
router.put('/list/:id', updateProblem);

module.exports = router;
