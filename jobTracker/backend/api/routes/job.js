const express = require('express');

const { createJob, updateJob } = require('../controllers/job');

const router = express.Router();

router.post('/create', createJob);
router.put('/update/:id', updateJob);
module.exports = router;
