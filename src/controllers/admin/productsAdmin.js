// const fetch = require("node-fetch");
const axios = require('axios');
//admin product 
const index = async (req, res) => {
  try {
    const { data } = await axios.get('https://tranducbo.herokuapp.com/products')
    res.render('admin/pages/products', { array: data });
  } catch (err) {
    console.log(err)
  }
}
//admin add product
const adminAddProducts = (req, res) => {
  res.render('admin/pages/addProducts')
}
//admin update product
const adminUpdateProducts = (req, res) => {
  res.render('admin/pages/updateProducts')
}

module.exports = {
  index,
  adminAddProducts,
  adminUpdateProducts
}