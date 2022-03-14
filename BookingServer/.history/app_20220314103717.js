const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')

const authRouter = require('./routes/authRouter')
const adminRouter = require('./routes/adminRouter')

const verify = require('./middleware/verify')

const app = express()

/* Database Connection */
const url = 'mongodb+srv://bethelmulat:613718@cluster0.nk7lc.mongodb.net/Booking?retryWrites=true&w=majority'
mongoose.connect(url)
    .then(_ => console.log(`connected to DB`))


app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cors())

/* User Authentication */
app.use('/auth/users', authRouter)

// House
app.use('/api/admin', adminRouter)

/* Error Handling */
app.use((err, req, res, next)=> {
    res.json({message: err})
})

app.listen(3000, () => {
    console.log('Server is listening....')
})
