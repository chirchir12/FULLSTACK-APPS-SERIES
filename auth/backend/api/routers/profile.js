const express = require('express');
const router = express.Router();
const { authUser } = require('../middlewares/auth');
const { getUserProfile, updateUserProfile } = require('../controllers/profile');
//1. update profile
router.put('/profile/update', authUser, updateUserProfile);

//2. view profile
router.get('/profile', authUser, getUserProfile);

module.exports = router;
