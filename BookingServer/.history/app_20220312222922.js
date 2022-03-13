const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')

const app = express()
mongoose.connect('mongodb://localhost:27017/user_database')
    .then(_ => console.log(`connected to DB`))


app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cors())