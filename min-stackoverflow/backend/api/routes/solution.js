const express = require('express');
const {
  createSolution,
  updateSolution,
  deleteSolution,
} = require('../controllers/solution');
const { authUser } = require('../middleware/auth');

const router = express.Router();

router.post('/create', authUser, createSolution);
router.put('/update/:id', authUser, updateSolution);
router.delete('/delete/:id', authUser, deleteSolution);

module.exports = router;
