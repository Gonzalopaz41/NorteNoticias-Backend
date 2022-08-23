const mongoose = require('mongoose')

const newsSchema=mongoose.Schema({

    category:{
        type:String,
        require:true
    },
    title:{
        type:String,
        require:true
    },
    img:{
        type:String
    },
    introduction:{
        type:String,
        require:true
    },
    description:{
        type:String,
        require:true
    },
    date:{
        type:Date,
        require:true
    },
    author:{
        type:Date,
        require:true
    }
})

module.exports=mongoose.model('news',newsSchema)