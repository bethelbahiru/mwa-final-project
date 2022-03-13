const express = require('express')

const { signupController } = require('./c')

const router = express().router()



router.post('/signup', authController)