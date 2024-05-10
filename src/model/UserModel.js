const mongoose=require('mongoose');

const databaseSchema=mongoose.Schema({
    email:{type:String, require:true, unique:true},
    firstName:{type:String, require:true},
    lastName:{type:String, require:true},
    userName:{type:String, require:true, unique:true},
    age:{type:String},
    mobile:{type:String},
    gender:{type:String},
    password:{type:String, require:true}
},{
    timestamps:true, versionKey:false
});

const UserModel=mongoose.model('users', databaseSchema);
module.exports=UserModel;