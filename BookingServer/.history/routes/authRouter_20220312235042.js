const express = require('express')

const { signupController } = require('../controllers/authController')

const router = express().



router.post('/signup', signupController)