const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    name: {
        type:String,
        required:true
     },
     
     surname:{
        type:String,
        required:true
     },
     email:{
        type:String,
        required:true,
     },
     password:{
        type:String,
        required:true
     }
   //    ,
   //   roll:{
   //    type:String,
   //    roll:"admin"
   //   }
})

module.exports=mongoose.model('user',userSchema)