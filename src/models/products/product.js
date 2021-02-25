const mongoose = require('mongoose')
const { Schema } = mongoose

const productSchema = new Schema({
    name: {
        type: String
    },
    image: {
        type: String
    },
    price: {
        type: Number
    },
    description: {
        type: String
    },
    category_id: {
        type: String
    },
    category_name: {
        type: String
    },
    brand_id: {
        type: String
    },
    brand_name: {
        type: String
    }
})

module.exports = mongoose.model('Product', productSchema)