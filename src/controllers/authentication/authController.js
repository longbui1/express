const User = require('../../models/users/user')
const { signUpValidation, signInValidation } = require('../../helpers/validate.js')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

//sign up users
const signUp = async(req, res) => {
    //validate 
    const { error } = signUpValidation(req.body)
    if (error) return res.status(400).send(error.details[0].message)
        //check email is exist
    const checkEmail = await User.findOne({ email: req.body.email })
    if (checkEmail) return res.status(400).send("email is exits")
        //hash password
    const salt = await bcrypt.genSalt(10)
    const hashPassword = await bcrypt.hash(req.body.password, salt)

    const user = new User({
        name: req.body.name,
        email: req.body.email,
        password: hashPassword
    })
    try {
        const savePostUser = await user.save()
        res.json(savePostUser)
    } catch (error) {
        console.log(error.message)
    }

}

//sign in user
const signIn = async(req, res) => {
        //validate
        const { error } = signInValidation(req.body)
        if (error) return res.status(400).send(error.details[0].message)
            //check email in database
        const user = await User.findOne({ email: req.body.email })
        if (!user) return res.send('email not found')
            //check password in database
        const checkPassword = await bcrypt.compare(req.body.password, user.password)
        if (!checkPassword) return res.status(400).send("Password wrong")
            //create and assign a token
        const token = jwt.sign({ _id: user._id }, process.env.TOKEN_SECRET)
        res.header('auth-token', token).send(token)
    }
    //sign out user 
const signOut = async(req, res) => {
    res.cookie('auth-token', '', { maxAge: 1 })
    res.send('log out')
}

module.exports = {
    signUp,
    signIn,
    signOut
}