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
        required : true 
    } ,
    contact :{
        type : Number , 
        required : true , 
    }
})

module.exports = mongoose.model("User" , UserSchema );