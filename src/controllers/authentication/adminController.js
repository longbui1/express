const Admin = require('../../models/admin/admin')
const { adminSignInValidation } = require('../../helpers/validateAdmin')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

//create token timeout
const maxAge = 3 * 24 * 60 * 60

//admin form sign in
const index = async(req, res) => {
    res.render('admin/adminFormSignIn')
}

//admin sign in
const adminSignIn = async(req, res) => {
    // validation admin using Joi
    const { error } = adminSignInValidation(req.body)
    if (error) return res.status(403).render('admin/adminFormSignIn', {
            error: error.details[0].message
        })
        // check userName in database
    const admin = await Admin.findOne({ user_name: req.body.user_name })
        // if (!admin) return res.status(403).send({ error: 'userName incorrect' })
    if (!admin) return res.status(403).render('admin/adminFormSignIn', {
            error: 'Username incorrect'
        })
        // check password in database
    const checkPassword = await bcrypt.compare(req.body.password, admin.password)
        // if (!checkPassword) return res.status(403).send('password incorrect')
    if (!checkPassword) return res.status(403).render('admin/adminFormSignIn', {
            error: 'Password incorrect'
        })
        // JWT authentication token admin
    const token = await jwt.sign({ _id: admin._id }, process.env.ADMIN_TOKEN_SECRET, { expiresIn: maxAge })
    res.cookie('adminToken', token)
    res.status(200).json({ admin: admin._id })





}

module.exports = {
    index,
    adminSignIn
}