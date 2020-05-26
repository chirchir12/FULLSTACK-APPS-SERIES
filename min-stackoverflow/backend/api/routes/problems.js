const express = require('express');
const {
  createProblem,
  ProblemsList,
  getSingleProblem,
  updateProblem,
  deleteProblem,
} = require('../controllers/problems');
const { authUser } = require('../middleware/auth');

const router = express.Router();

router.post('/create', authUser, createProblem);
router.get('/list', ProblemsList);
router.get('/list/:id', getSingleProblem);
router.put('/list/:id', authUser, updateProblem);
router.delete('/list/:id', authUser, deleteProblem);

module.exports = router;
