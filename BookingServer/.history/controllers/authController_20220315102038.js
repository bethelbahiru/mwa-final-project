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
    
    try {
        let user = await User.findOne({email: req.body.email})
    if (user){
        var password = await user.compareUserPassword(req.body.password, user.password)
    } else {
        res.json({success: false, message: 'User not found, Sign up to continue'})
    }
    
    if (password){
        let token = await user.genertareJwtToken({user} , process., {expiresIn: 604800})
        if(token) {
            res.json({success: true, token: token, userCred: user})
        }
    } else {
        res.json({success: false, message: 'Wrong Password entered'})
    }
    } catch(error) {
        res.json({success: false, message: 'Wrong User Detail'})
    }

}