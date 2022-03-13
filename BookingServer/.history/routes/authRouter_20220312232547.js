const express = require('express')

const { signupController } = require('./controller.')

const router = express().router()



router.post('/signup', signupController)