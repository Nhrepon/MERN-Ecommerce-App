const express = require('express');
const router=require('./src/routes/api');
const mongoose = require('mongoose');
const app=new express();






















// Database connection
/* const url="mongodb://localhost:27017/mernEcommerce";
const option={user:"", pass:"", autoIndex:true}; */

const url="mongodb+srv://Repon:<password>@cluster0.nhslprh.mongodb.net/MernEcommerce";
const option={user:"Repon", pass:"Repon7248", autoIndex:true};

mongoose.connect(url, option).then((res)=>{
    console.log("Database connect success ... ");
}).catch((error)=>{
    console.log(error);
});





// Api router manage
app.use("/api", router);






// connect front end 
app.use(express.static('client/dist'));
app.get('*', (req, res) => {
   res.sendFile(path.resolve(__dirname, 'client', 'dist', 'index.html'));
});







// 404 url not found manage
app.use("*",(req, res)=>{
    res.status(404).json({data:"Not found"});
});


module.exports = app;