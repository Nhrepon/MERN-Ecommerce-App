const ProductModel=require('../model/ProductModel');


exports.createProduct=async(req, res) => {
    try {
        const reqBody=req.body;
        const data=await ProductModel.create(reqBody);
        res.json({status:"success", data:data});
    } catch (error) {
        res.json({status:"Failed",message:error});
    }
    
}



exports.readProduct=async(req, res) => {
    try {
        const data=await ProductModel.find();
        res.json({status:"success", data:data});
    } catch (error) {
        res.json({status:"Failed",message:error});
    }
    
}






exports.updateProduct=async(req, res) => {
    try {
        const {id}=req.params;
        const reqBody=req.body;
        const data=await ProductModel.updateOne({_id:id},reqBody);
        res.json({status:"success", data:data});
    } catch (error) {
        res.json({status:"Failed",message:error});
    }
    
}





exports.deleteProduct=async(req, res) => {
    try {
        const {id}=req.params;
        const data=await ProductModel.deleteOne({_id:id});
        res.json({status:"success", data:data});
    } catch (error) {
        res.json({status:"Failed",message:error});
    }
    
}