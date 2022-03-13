const User = require('../models/userModel')

module.exports.signupController = async (req, res,next) => {
    try {
        let user = new User({
            fname: req.body.fname,
            lname: req.body.lname,
            email: req.body.email,
            role: req.body.role
        })
        user.password = await user.hashPassword(req.body.password)
        let createdUser = await user.save()
        res.json({success: true, data: createdUser})
    } catch (error) {
        res.json({success: false, error})   
    }

}

module.exports.loginController = async (req, res,next) => {
    
    try {}
    
     
        

}