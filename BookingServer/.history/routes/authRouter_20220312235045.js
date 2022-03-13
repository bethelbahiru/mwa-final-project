const express = require('express')

const { signupController } = require('../controllers/authController')

const router = express().Ro



router.post('/signup', signupController)