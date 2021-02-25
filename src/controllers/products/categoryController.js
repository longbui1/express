const Category=require('../../models/products/category')

//get categories
const index=async(req,res,next)=>{
    try {
        const categories=await Category.find()
        res.json(categories)
    } catch (error) {
        res.json({message:error})
    }
}

//post categories
const postCategory = async (req, res) => {
    const categories = new Category({
        category_name: req.body.category_name
    })
    try {
        const saveCategory = await categories.save()
        res.json(saveCategory)
    } catch (error) {
        res.json(message.error)
    }
}

//search categories
const searchCategory=async(req,res) => {
    try {
        const categories = await Category.findById(req.params.categoryId)
        res.json(categories)
    } catch (error) {
        res.json({message:error})
    }
}

//update categories
const updateCategory = async(req, res) => {
    try {
        const categories = await Category.updateOne(
            {_id:req.params.categoryId},
            {$set:{
                category_name:req.body.category_name
            }}
        )
        res.json(categories)
    } catch (error) {
        res.json({message:error})
    }
}

//delete categories
const deleteCategory = async (req,res)=>{
    try {
        const categories=await Category.remove({_id:req.params.categoryId})
        res.json(categories)
    } catch (error) {
        res.json({message:error})
    }
}

module.exports={
    index,
    postCategory,
    searchCategory,
    updateCategory,
    deleteCategory
}