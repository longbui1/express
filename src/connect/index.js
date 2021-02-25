const mongoose=require('mongoose')

async function connect(){
    try{
        await mongoose.connect(process.env.DB_CONNECT,{
            useNewUrlParser:true,
            useUnifiedTopology:true
        })
        console.log("connect successfully")
    }catch{
        console.log("connect failed")
    }
}

module.exports ={connect}