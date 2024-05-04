const express=require('express');
const ProductController=require('../controller/ProductController');
const UserController = require('../controller/UserController');
const router=express.Router();

router.post("/userRegistration",UserController.userRegistration);




router.post("/createProduct",ProductController.createProduct);







module.exports=router;

