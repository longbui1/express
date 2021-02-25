const Product = require('../../models/products/product')

//get product
const index = async (req, res, next) => {
  try {
    const products = await Product.find()
    res.json(products);
  } catch (err) {
    res.json({ message: err })
  }
}
//post product
const postProduct = async (req, res, next) => {
  const product = new Product({
    name: req.body.name,
    image: req.file.filename,
    price: req.body.price,
    description: req.body.description,
    category_id: req.body.category_id,
    category_name: req.body.category_name,
    brand_id: req.body.brand_id,
    brand_name: req.body.brand_name
  })
  try {
    const saveProduct = await product.save()
    res.json(saveProduct)
  } catch (err) {
    res.json({ message: err })
  }
}
//search product by ID
const searchProduct = async (req, res, next) => {
  try {
    const searchProduct = await Product.findById(req.params.productId)
    res.json(searchProduct)
  } catch (error) {
    res.json({ message: err })
  }
}

//update product
const updateProduct = async (req, res, next) => {
  try {
    const product = await Product.updateOne({ _id: req.params.productId }, {
      $set: {
        name: req.body.name,
        image: req.file.filename,
        price: req.body.price,
        description: req.body.description,
        category_id: req.body.category_id,
        category_name: req.body.category_name,
        brand_id: req.body.brand_id,
        brand_name: req.body.brand_name
      }
    })
    res.json(product)
  } catch (error) {
    res.json({ message: error })
  }
}
//deleteProduct
const deleteProduct = async (req, res, next) => {
  try {
    const product = await Product.deleteOne({ _id: req.params.productId })
    res.json(product)
  } catch (error) {
    res.json({ message: err })
  }
}
//delete many products
const deleteManyProducts = async (req, res, next) => {
  try {
    const product = await Product.deleteMany({ _id: { $in: req.body.ids } })
    res.json(product)
  } catch (error) {
    res.json({ message: error })
  }
}


module.exports = {
  index,
  postProduct,
  searchProduct,
  updateProduct,
  deleteProduct,
  deleteManyProducts
}