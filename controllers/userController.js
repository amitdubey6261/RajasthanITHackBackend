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
    res.status(200).json({
        success : true , 
        user ,
    })
})

exports.updateLocation = catchAsyncErrors(async(req,res,next)=>{
    let user = User.findById(req.params.id) ; 
    console.log(req.params.id)
    if(!user){
        return next(new ErrorHandler("User Not Found" , 404));
    }
    user = await User.findByIdAndUpdate(req.params.id , req.body)

    res.status(200).json({
        success:true , 
        user ,
    })
})

exports.login = catchAsyncError(async(req , res , next)=>{
    console.log(req.params.id)
    let user = await User.findOne({contact:req.params.id});
    if( !user ){ return next(new ErrorHandler("User Not Found" , 404)); }
    else{
        console.log(user.id);
        res.send(user.id)
    }

})