const express = require('express');

const {
  createJob,
  updateJob,
  getALLJobs,
  deleteJob,
  updateResponse,
  getSingleJobs,
} = require('../controllers/job');

const router = express.Router();

router.post('/create', createJob);
router.get('', getALLJobs);
router.put('/update/:id', updateJob);
router.get('/single/:id', getSingleJobs);
router.delete('/delete/:id', deleteJob);
router.put('/response/:id', updateResponse);

module.exports = router;
