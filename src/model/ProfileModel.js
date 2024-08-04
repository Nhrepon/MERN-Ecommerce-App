const mongoose=require('mongoose');

const databaseSchema=mongoose.Schema({
    userId:{type:mongoose.Schema.Types.ObjectId, require:true},
    userName:{type:String, require:true, unique:true},
    firstName:{type:String},
    lastName:{type:String},
    age:{type:String},
    gender:{type:String},
    userMobile:{type:String},
    userAddress:{type:String},
    userPostalCode:{type:String},
    userDistrict:{type:String},
    userCity:{type:String},
    userState:{type:String},
    userCountry:{type:String},

    shippingAddress:{type:String},
    shippingPostalCode:{type:String},
    shippingDistrict:{type:String},
    shippingCity:{type:String},
    shippingState:{type:String},
    shippingCountry:{type:String},


}, {timestamps:true, versionKey:false});


const ProfileModel=mongoose.model('profiles', databaseSchema);
module.exports = ProfileModel;