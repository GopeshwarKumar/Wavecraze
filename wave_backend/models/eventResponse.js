const mongoose =require("mongoose")

mongoose.createConnection("mongodb://localhost:27017/response")

const responseSchema=mongoose.Schema({
    name:{
        type:String,
    },
    email:{
        type:String,
    },
    response:{
        type:String,
    }
})

module.exports=mongoose.model("eventResponse",responseSchema)