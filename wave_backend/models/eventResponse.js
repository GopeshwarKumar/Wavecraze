const mongoose =require("mongoose")

mongoose.createConnection("mongodb+srv://gopeshwarkumark:QWWwPOKNVtFyKKNC@wavecraze.i9lkgcv.mongodb.net/response")

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
