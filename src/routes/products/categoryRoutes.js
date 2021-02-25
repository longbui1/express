const express =require('express')
const router=express.Router()
const categoryController=require('../../controllers/products/categoryController')

router.get("/",categoryController.index)
router.post("/",categoryController.postCategory)
router.get("/:categoryId",categoryController.searchCategory)
router.patch("/:categoryId",categoryController.updateCategory)
router.delete("/:categoryId",categoryController.deleteCategory)

module.exports=router