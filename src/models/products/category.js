const mongoose=require('mongoose')
const {Schema}=mongoose

const categorySchema=new Schema({
    category_name:{
        type:String
    }
})

module.exports=mongoose.model('Category',categorySchema)