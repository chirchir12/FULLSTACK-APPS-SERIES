const express = require('express');

const { createJob, updateJob, getALLJobs } = require('../controllers/job');

const router = express.Router();

router.post('/create', createJob);
router.get('', getALLJobs);
router.put('/update/:id', updateJob);
module.exports = router;
