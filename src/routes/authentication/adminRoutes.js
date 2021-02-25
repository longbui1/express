const express = require('express')
const router = express.Router()
    // const auth = require('../../middleware/verifyToken')

const adminController = require('../../controllers/authentication/adminController')

router.get('/', adminController.index)
router.post('/', adminController.adminSignIn)


module.exports = router