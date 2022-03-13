const User = require('../models/userModel')

module.exports.signupController = async (req, res,next) => {
    try {
        let user = new User({
            username: req.body.username,
            email: req.body.email,
            role: req.body.role
        })
        user.password = await user.hashPassword(req.body.password)
        let createdUser = await user.save()
        res.json({message: 'user registered', data: createdUser})
    } catch (error) {
        res.json({error})   
    }

}

module.exports.loginController = async (req, res,next) => {
   

}