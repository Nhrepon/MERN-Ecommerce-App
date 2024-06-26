const express=require('express');
const ProductController=require('../controller/ProductController');
const UserController = require('../controller/UserController');
const AuthMiddleware = require('../middleware/AuthMiddleware');
const router=express.Router();



router.post("/userRegistration",UserController.userRegistration);
router.post("/userLogin/:email/:password",UserController.userLogin);
router.post("/userVerify/:email",AuthMiddleware ,UserController.userVerify);
router.get("/userProfileRead", AuthMiddleware, UserController.userProfileRead);
router.post("/userProfileUpdate/:id", AuthMiddleware, UserController.userProfileUpdate);
router.post("/userProfileDelete/:id", AuthMiddleware, UserController.userProfileDelete);






router.post("/createProduct",ProductController.createProduct);
router.get("/readProduct",ProductController.readProduct);
router.post("/updateProduct/:id",ProductController.updateProduct);
router.post("/deleteProduct/:id",ProductController.deleteProduct);






















module.exports=router;

