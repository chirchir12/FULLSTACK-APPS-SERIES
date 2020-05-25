const express = require('express');
const {
  createProblem,
  ProblemsList,
  getSingleProblem,
  updateProblem,
  deleteProblem,
} = require('../controllers/problems');
const router = express.Router();

router.post('/create', createProblem);
router.get('/list', ProblemsList);
router.get('/list/:id', getSingleProblem);
router.put('/list/:id', updateProblem);
router.delete('/list/:id', deleteProblem);

module.exports = router;
