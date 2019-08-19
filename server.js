const express = require("express");
const app = express();
const mongo= require("mongoose");
const cors = require("cors");
const PORT = 5000;
const config = require('./node_modules/config')
const connectDb = require('./config/db')
const contactform = require('./models/contactform') 


app.use(cors());
app.use(express.json());
connectDb();


app.post("/contactform", (req, res) =>{
    console.log(req.body);
    const contactformDetails = req.body;
    const newDetails = new contactform(contactformDetails)
    console.log(newDetails);
    
    newDetails.save((err,doc)=>{
        if(err) console.log(err)
        return res.json(doc)
      })
    })


app.listen(PORT, err=> {
    if(err){
        console.log(err);
    }else{
        console.log("We are live !!!!!")
    }
    });