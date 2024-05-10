const {decodeToken}=require("../utility/TokenHelper");
const AuthMiddleware=async (req, res, next)=>{
try {
    const token=req.headers['token'];
    if(!token){
        token=req.cookie['token'];
    }

    const decode=decodeToken(token);

    if(decode===null){
        return res.status(401).json({status:"fail", data:"Unauthorized user"});
    }else{
        const email=decode['email'];
        const userId=decode['userId'];
        req.headers.email=email;
        req.headers.userId=userId;
        next();
    }

} catch (error) {
    return {status:"fail", data:error}
}
}



module.exports=AuthMiddleware;