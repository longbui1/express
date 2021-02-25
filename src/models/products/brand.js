const mongoose=require('mongoose')
const {Schema}=mongoose

const brandSchema=new Schema({
    brand_name:{
        type:String
    },
    image:{
        type:String
    }
})

module.exports=mongoose.model('Brand',brandSchema)