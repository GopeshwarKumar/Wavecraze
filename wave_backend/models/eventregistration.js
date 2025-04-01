const mongoose =require("mongoose");

mongoose.connect("mongodb://localhost:27017/wavecraze")

const eventschema=mongoose.Schema({
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

module.exports=mongoose.model("eventregistration",eventschema);