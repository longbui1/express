const Brand=require('../../models/products/brand')

//get brands
const index=async(req,res,next)=>{
    try {
        const brands=await Brand.find()
        res.json(brands)
    } catch (error) {
        res.json({message:error})
    }
}

//post brands
const postBrand = async (req, res) => {
    const brands = new Brand({
        brand_name: req.body.brand_name,
        image: req.file.filename
    })
    try {
        const saveBrand = await brands.save()
        res.json(saveBrand)
    } catch (error) {
        res.json(message.error)
    }
}

//search brands
const searchBrand=async(req,res) => {
    try {
        const brands = await Brand.findById(req.params.brandId)
        res.json(brands)
    } catch (error) {
        res.json({message:error})
    }
}

//update brands
const updateBrand = async(req, res) => {
    try {
        const brands = await Brand.updateOne(
            {_id:req.params.brandId},
            {$set:{
                brand_name:req.body.brand_name,
                image: req.file.filename
            }}
        )
        res.json(brands)
    } catch (error) {
        res.json({message:error})
    }
}

//delete brands
const deleteBrand = async (req,res)=>{
    try {
        const brands=await Brand.remove({_id:req.params.brandId})
        res.json(brands)
    } catch (error) {
        res.json({message:error})
    }
}

const deleteManyBrands= async (req, res, next) => {
    try {
      const brand = await brands.deleteMany({ _id: { $in: req.body.ids } })
      res.json(brand)
    } catch (error) {
      res.json({ message: error })
    }
  }

module.exports={
    index,
    postBrand,
    searchBrand,
    updateBrand,
    deleteBrand,
    deleteManyBrands
}