const mongoose = require('mongoose')

const courseSchema =new mongoose.Schema({
        course_id:{
            type:Number,
            required:true
        },
        
        course_Name:{
            type:String,
            required:true
        },
        course_desciption:{
            type:String,
            required:true
        }
})


module.exports = mongoose.model('course',courseSchema)