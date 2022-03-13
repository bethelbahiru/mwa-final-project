const express = require('express')

const { signupController } = require('./cont')

const router = express().router()



router.post('/signup', signupController)