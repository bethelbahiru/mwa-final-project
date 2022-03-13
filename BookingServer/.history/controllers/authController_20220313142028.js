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
        res.json({message: 'user registered', data: createdUser})
    } catch (error) {
        res.json({error})   
    }

}

module.exports.loginController = async (req, res,next) => {

    let user = await User.findOne({email: req.body.email})
    if (user == null){
        res.json({success: false,message: 'User is not found'})
    }

    let password = await user.compareUserPassword(req.body.password, user.password)
    
    if (password){
        let token = await user.genertareJwtToken({user} , "secret", {expiresIn: 604800})
        if(token) {
            res.json({success: true, token: token, userCred: user})
        }
    } else {
        res.json({message: 'Wrong Password entered'})
    }

}