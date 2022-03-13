const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
// mongodb+srv://bethelmulat:<password>@cluster0.nk7lc.mongodb.net/myFirstDatabase?retryWrites=true&w=majority
const app = express()
const url = 'mongodb+srv://bethelmulat:613718@cluster0.nk7lc.mongodb.net/Booking?retryWrites=true&w=majority'
mongoose.connect('mongodb://localhost:27017/user_database')
    .then(_ => console.log(`connected to DB`))


app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cors())


app.use('')



