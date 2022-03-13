const express = require('express')

const { signupController } = require('./controllers/')

const router = express().router()



router.post('/signup', signupController)