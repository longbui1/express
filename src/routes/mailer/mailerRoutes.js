const express = require('express')
const router = express.Router()

const mailerController = require('../../controllers/mailer/mailerController')
const verifyAdmin = require('../../middleware/verifyAdminToken')

router.get('/', verifyAdmin, mailerController.index)
router.post('/', mailerController.sendEmail)

module.exports = router