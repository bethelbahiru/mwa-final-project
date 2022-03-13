const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')

const authRouter = require('./routes/authRouter')

// mongodb+srv://bethelmulat:<password>@cluster0.nk7lc.mongodb.net/myFirstDatabase?retryWrites=true&w=majority
const app = express()


const url = 'mongodb+srv://bethelmulat:613718@cluster0.nk7lc.mongodb.net/Booking?retryWrites=true&w=majority'
mongoose.connect(url)
    .then(_ => console.log(`connected to DB`))


app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cors())


app.use('/auth', authRouter)



app.use((err, req, res, next)=> {
    
})