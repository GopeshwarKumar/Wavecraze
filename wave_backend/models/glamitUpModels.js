const mongoose =require("mongoose");

mongoose.createConnection("mongodb://localhost:27017/glamitUp")

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
    event:{
        type:String
    }
})

module.exports=mongoose.model("glamitUpModels",glamschema);