const mongoose =require("mongoose");

mongoose.connect("mongodb+srv://gopeshwarkumark:QWWwPOKNVtFyKKNC@wavecraze.i9lkgcv.mongodb.net/wavecraze").then(ree =>{
    console.log("db connected")
})

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
    year:{
        type:String
    },
    Department:{
        type:String
    },
    roll:{
        type:String
    },
    event:{
        type:String
    }
})

module.exports=mongoose.model("eventregistration",eventschema);
