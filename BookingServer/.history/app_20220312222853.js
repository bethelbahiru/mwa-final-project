const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const User = require('./model/userModel')
const { verify } = require('./middleware/verify')


const app = express()
mongoose.connect('mongodb://localhost:27017/user_database')
    .then(_ => console.log(`connected to DB`))
