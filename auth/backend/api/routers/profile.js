const express = require('express')
const router = express.Router()
const { getUserProfile, updateUserProfile } = require('../controllers/profile')
//1. update profile
router.put('/profile/update', updateUserProfile)

//2. view profile
router.get('/profile', getUserProfile)

module.exports = router