const express = require('express')
const router = express.Router()
const verifyAdmin = require('../../middleware/verifyAdminToken')

const productsAdmin = require('../../controllers/admin/productsAdmin')

router.get('/', verifyAdmin, productsAdmin.index)
router.get('/addProducts', verifyAdmin, productsAdmin.adminAddProducts)
router.get('/updateProducts/:id', verifyAdmin, productsAdmin.adminUpdateProducts)


module.exports = router