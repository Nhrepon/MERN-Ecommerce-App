const UserModel = require("../model/UserModel");


exports.userRegistration=async (req, res)=>{
    try{
        const reqBody=req.body;
        const data= await UserModel.create(reqBody);
        res.json({status:"Success", message:"User registration success ... ", data:data});
    }catch(error){
        res.json({status:"Error", data:error});
    }
}