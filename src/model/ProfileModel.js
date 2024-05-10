const mongoose=require('mongoose');

const databaseSchema=mongoose.Schema({
    userId:{type:mongoose.Schema.Types.ObjectId, require:true},
    userMobile:{type:String, require:true},
    userAddress:{type:String, require:true},
    userPostalCode:{type:String, require:true},
    userDistrict:{type:String, require:true},
    userCity:{type:String, require:true},
    userState:{type:String, require:true},
    userCountry:{type:String, require:true},

    shippingAddress:{type:String, require:true},
    shippingPostalCode:{type:String, require:true},
    shippingDistrict:{type:String, require:true},
    shippingCity:{type:String, require:true},
    shippingState:{type:String, require:true},
    shippingCountry:{type:String, require:true},


}, {timestamps:true, versionKey:false});

const ProfileModel=mongoose.model('profiles', databaseSchema);
module.exports=ProfileModel;