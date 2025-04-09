const mongoose =require("mongoose");

mongoose.createConnection("mongodb+srv://gopeshwarkumark:QWWwPOKNVtFyKKNC@wavecraze.i9lkgcv.mongodb.net/glamitUp")

const glamschema=mongoose.Schema({
    name:{
        type:String,
    },
    mob:{
        type:String
    },
    email:{
        type:String
    },
    year:{
        type:String
    },
    Department:{
        type:String
    },
    rollNo:{
        type:String
    },
    event:{
        type:String
    }
})

module.exports=mongoose.model("glamitUpModels",glamschema);
