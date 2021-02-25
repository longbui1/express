const express = require('express')
const router = express.Router()
const auth = require('../../middleware/verifyToken')

const authController = require('../../controllers/authentication/authController')

router.post('/signUp', authController.signUp)
router.post('/signIn', authController.signIn)
router.get('/signOut', auth, authController.signOut)

module.exports = router