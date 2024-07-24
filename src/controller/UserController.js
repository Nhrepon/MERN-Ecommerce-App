const BlogPostDetailsModel = require("../model/BlogPostDetailsModel");
const UserModel = require("../model/UserModel");


exports.userRegistration=async (req, res)=>{
    try{
        const reqBody=req.body;
        const data= await UserModel.create(reqBody);
        res.json({status:"success", message:"User registration success ... ", data:data});
    }catch(error){
        res.json({status:"error", data:error});
    }
}









exports.userProfileRead=async (req, res)=>{
    try {
        
        const data=await UserModel.find();
        res.json({status:"success", data:data});
    } catch (error) {
        res.json({status:"error", data:error});
    }
}











exports.userProfileUpdate=async (req, res)=>{
    try {
        const {id}=req.params;
        const reqBody=req.body;
        const data=await UserModel.updateOne({_id:id}, reqBody, {upsert:true});
        res.json({status:"Success", data:data});
    } catch (error) {
        res.json({status:"Error", data:error});
    }
}











exports.userProfileDelete=async (req, res)=>{
    try {
        const {id}=req.params;
        const data=await UserModel.deleteOne({_id:id});
        res.json({status:"Success", data:data});
    } catch (error) {
        res.json({status:"Error", data:error});
    }
}








exports.userLogin=async (req, res)=>{
    try {
        
        res.json({status:"Success", data:data});
    } catch (error) {
        res.json({status:"Error", data:error});
    }
}









exports.userVerify=async (req, res)=>{
    try {
        
        res.json({status:"Success", data:data});
    } catch (error) {
        res.json({status:"Error", data:error});
    }
}