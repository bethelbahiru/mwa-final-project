const express = require('express')

const { signupController } = require('./con')

const router = express().router()



router.post('/signup', signupController)