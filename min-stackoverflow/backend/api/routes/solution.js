const express = require('express');
const { createSolution, updateSolution } = require('../controllers/solution');

const router = express.Router();

router.post('/create', createSolution);
router.put('/update/:id', updateSolution);

module.exports = router;
