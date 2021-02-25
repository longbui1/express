const jwt = require('jsonwebtoken')

const verifyAdmin = async(req, res, next) => {
    const token = req.cookies.adminToken
    if (!token) return res.status(401).redirect('/rhino-admin')

    try {
        const verifiedAdmin = jwt.verify(token, process.env.ADMIN_TOKEN_SECRET)
        req.admin = verifiedAdmin
        next()
    } catch (err) {
        res.status(400).send('Invalid token')
    }
}
module.exports = verifyAdmin