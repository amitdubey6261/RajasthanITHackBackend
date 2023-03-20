const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
    name :{
        type : String , 
        required:[true , "Please Enter Name"]
    } , 
    shopName :{
        type : String , 
        required :[ true , "please Enter Shop Name"]
    } , 
    location :{
        type : Object , 
        required : false
    } ,
    contact :{
        type : Number , 
        required : true , 
        unique:true , 
    }
})

module.exports = mongoose.model("User" , UserSchema );