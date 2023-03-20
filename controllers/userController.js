const catchAsyncErrors = require('../middleware/catchAsyncErrors.js');
const catchAsyncError = require('../middleware/catchAsyncErrors.js')
const User = require("../models/userModel.js");
const ErrorHandler = require('../utils/errorHandler.js');

exports.getAllusers = catchAsyncError(async(req , res)=>{
    const user = await User.find();
    res.status(200).json({
        success : true , 
        user , 
    })
})

exports.createUser = catchAsyncError(async(req , res)=>{
    const user = await User.create(req.body);
})