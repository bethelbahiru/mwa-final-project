const jwt = require("jsonwebtoken")

module.exports.verify = (req, res, next) => {
  try {
    const token = req.headers.authorization.replace("Bearer ", "")

    const decoded = jwt.verify(token, process.env.SECRET)
    req.userData = decoded
    // console.log(req.userData);
    next();
  } catch (err) {
    return res.json({
      message: "Authentification Failed"
    })
  }
}