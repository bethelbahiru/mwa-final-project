const User = require('../models/')
module.exports.signupController = async (req, res,next) => {
    try {
        let user = new User({
            username: req.body.username,
            email: req.body.email
        })
        user.password = await user.hashPassword(req.body.password)
        let createdUser = await user.save()
        res.json({message: 'user registered', data: createdUser})
    } catch (error) {
        res.json({error})
        
    }

}