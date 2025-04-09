const express = require('express');
const path=require("path");
const cors=require("cors");
const env=require("dotenv")
env.config()
const userdata=require('./models/eventregistration')
const glamItUpUser=require('./models/glamitUpModels')
const responsedata=require("./models/eventResponse")

const app = express()

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res )=>{
    res.send("Hello World");
})

// talent X registration
app.post("/eventregister" ,async (req, res) => {
    // console.log(req.body)
    const existeduser=await userdata.findOne({"email":req.body.email})
    if(existeduser){
        return res.send({message:"Email already exists"})
    }
    const user= userdata(req.body)
    await user.save().then(ree =>{
        res.send({message:"Registered for Talent-X"})
    }).catch(err =>{
        console.log(err)
    })
})

// glam it up registration
app.post("/glamregister" ,async (req, res) => {
    // console.log(req.body)
    const existeduser=await glamItUpUser.findOne({"email":req.body.email})
    if(existeduser){
        return res.send({message:"Email already exists"})
    }
    const user= glamItUpUser(req.body)
    await user.save().then(ree =>{
        res.send({"message":"Registerd for GlamIt Up"})
    }).catch(err =>{
        console.log(err)
    })
})

// response from audience
app.post("/response", async (req,res)=>{
    const existeduser=await responsedata.findOne({"email":req.body.email})
    if(existeduser){
        return res.send({message:"response already sent Thank You ❤️"})
    }
    console.log(req.body)
    const respons=await responsedata(req.body)
    await respons.save().then(ress =>{
        res.send({"message":"Response sent Thank You ❤️"})
    })
})

app.listen(5000,()=>{
    console.log("working");
})

// nodemon start index.js
