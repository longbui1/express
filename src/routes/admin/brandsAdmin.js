const express = require('express')
const router = express.Router()
const verifyAdmin = require('../../middleware/verifyAdminToken')

const brandAdmin = require('../../controllers/admin/brandAdmin')

router.get('/', verifyAdmin, brandAdmin.index)
router.get('/addBrands', verifyAdmin, brandAdmin.adminAddBrands)
router.get('/updateBrands/:id', verifyAdmin, brandAdmin.adminUpdateBrands)


module.exports = router