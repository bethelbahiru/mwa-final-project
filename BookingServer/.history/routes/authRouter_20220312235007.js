const express = require('express')

const { signupController } = require('../controllers/authController')

const router = express.router()



router.post('/signup', signupController)