const express = require('express')

const { signupController } = require('../controllers/authController')

const router = express().Rout



router.post('/signup', signupController)