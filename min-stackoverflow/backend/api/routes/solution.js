const express = require('express');
const {
  createSolution,
  updateSolution,
  deleteSolution,
} = require('../controllers/solution');

const router = express.Router();

router.post('/create', createSolution);
router.put('/update/:id', updateSolution);
router.delete('/delete/:id', deleteSolution);

module.exports = router;
