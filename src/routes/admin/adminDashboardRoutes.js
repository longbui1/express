const express = require('express')
const router = express.Router()
const verifyAdmin = require('../../middleware/verifyAdminToken')

const adminDashboardController = require('../../controllers/admin/adminDashboardController')

router.get('/', verifyAdmin, adminDashboardController.index)
router.get('/signOut', adminDashboardController.adminSignOut)

module.exports = router