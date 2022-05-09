const mongoose = require('mongoose')

const learnerSchema =new mongoose.Schema({
        learner_Name:{
            type:String,
            required:true,
            min: 4,
            max: 255
        },
        learner_email:{
            type:String,
            required:true,
            min: 4,
            max: 255
        },
        learner_password:{
            type:String,
            required:true,
            min: 8,
            max: 255
        },
       
})


module.exports = mongoose.model('authenticate-data',learnerSchema)