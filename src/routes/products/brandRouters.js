const express =require('express')
const router=express.Router()
const brandController=require('../../controllers/products/brandController')
const upload = require('../../middleware/upload')

router.get("/",brandController.index)
router.post("/",upload,brandController.postBrand)
router.get("/:brandId",brandController.searchBrand)
router.patch("/:brandId",upload,brandController.updateBrand)
router.delete("/:brandId",brandController.deleteBrand),
router.post('/deleteManyBrands', brandController.deleteManyBrands)

module.exports=router