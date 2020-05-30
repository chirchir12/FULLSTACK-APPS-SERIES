const express = require('express');

const {
  createJob,
  updateJob,
  getALLJobs,
  deleteJob,
  updateResponse,
} = require('../controllers/job');

const router = express.Router();

router.post('/create', createJob);
router.get('', getALLJobs);
router.put('/update/:id', updateJob);
router.delete('/delete', deleteJob);
router.put('/response/:id', updateResponse);

module.exports = router;
