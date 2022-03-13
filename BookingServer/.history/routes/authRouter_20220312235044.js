const express = require('express')

const { signupController } = require('../controllers/authController')

const router = express().R



router.post('/signup', signupController)