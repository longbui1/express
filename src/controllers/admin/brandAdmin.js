// const fetch = require("node-fetch");
const axios = require('axios');
//admin product 
const index = async (req, res) => {
  try {
    const { data } = await axios.get('https://tranducbo.herokuapp.com/brands')
    res.render('admin/pages/brand/brand', { array: data });
  } catch (err) {
    console.log(err)
  }
}
//admin add product
const adminAddBrands = (req, res) => {
  res.render('admin/pages/brand/addBrands')
}
//admin update product
const adminUpdateBrands = (req, res) => {
  res.render('admin/pages/brand/updateBrands')
}

module.exports = {
  index,
  adminAddBrands,
  adminUpdateBrands
}