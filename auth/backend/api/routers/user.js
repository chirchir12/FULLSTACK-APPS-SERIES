const express = require('express')
const { registerUser, loginUser } = require('../controllers/user')
const router = express.Router()

//1. register user
router.post('/register', registerUser)
// 2. login user
router.post('/login', loginUser)

//3. logout user


module.exports = router