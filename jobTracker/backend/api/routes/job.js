const express = require('express');

const { createJob } = require('../controllers/job');

const router = express.Router();

router.post('/create', createJob);

module.exports = router;
