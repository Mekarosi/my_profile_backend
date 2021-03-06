const mongoose = require('mongoose')
const schema = mongoose.Schema({
   
    fullName:{
        type:String,
        required:true
    },

    email:{
      type:String,
      required:true
    },

    address:{
        type:String,
        required:true
    },

    phoneNumber:{
        type:Number,
        required:true
    },

    message:{
        type:String,
        required:true
    }

})

module.exports = mongoose.model('contactform',schema)