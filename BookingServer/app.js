const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')

const authRouter = require('./routes/authRouter')

const app = express()

/* Database Connection */
const url = ''
mongoose.connect(url)
    .then(_ => console.log(`connected to DB`))


app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cors())

/* User Authentication */
app.use('/auth/users', authRouter)


/* Error Handling */
app.use((err, req, res, next)=> {
    res.json({message: err})
})

app.listen(6000, () => {
    console.log('Server is listening....')
})