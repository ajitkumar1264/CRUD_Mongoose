const mongoose=require('mongoose');

const userschema=new mongoose.Schema({

    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    age:{
        type:Number,
        required:true
    },
    mobile:{
        type:Number,
        required:true
    }
   
    
},{timestamps:true})

module.exports=new mongoose.model('users',userschema)

