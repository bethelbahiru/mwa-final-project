const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const uniqueValidator = require('mongoose-unique-validator')

const userSchema = new mongoose.Schema({
    username: {type: String},
    email: {type: String, unique: true},
    password: {type: String},
    role: {type: String}
})

userSchema.methods.hashPassword = async (password) => {
    return bcrypt.hashSync(password, 10)
}

userSchema.methods.compareUserPassword = async (inputPassword, hashedPassword) => {
    return await bcrypt.compare(inputPassword, hashedPassword)
}

userSchema.methods.genertareJwtToken = async (payload, secret, expires) => {
    return jwt.sign(payload,secret,expires)
}

userSchema.plugin(uniqueValidator, {
    message: 'Already in use'
})

module.exports = mongoose.model('User', userSchema)