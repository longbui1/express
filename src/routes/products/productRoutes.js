const express = require('express')
const router = express.Router()
const productController = require('../../controllers/products/productController')
const upload = require('../../middleware/upload')

router.get('/', productController.index)
router.post('/', upload, productController.postProduct)
router.get('/:productId', productController.searchProduct)
router.patch('/:productId', upload, productController.updateProduct)
router.delete('/:productId', productController.deleteProduct)
router.post('/deleteManyProducts', productController.deleteManyProducts)

module.exports = router