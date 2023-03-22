const jwt = require("jsonwebtoken")

const verifyToken = (req, res, next) => {
    const token = req.body.token || req.query.token || req.headers['x-access-token']

    if (!token) {
        return res.status(403).json({
            success: false,
            message: "Enter token."
        })
    }

    try {
        const decoded = jwt.verify(token, "MySuperDuperPrivateKey")
        req.user = decoded
    } catch (error) {
        return res.status(401).json({
            success: false,
            message: "Token is wrong or broken."
        })
    }

    return next()
}

module.exports = verifyToken