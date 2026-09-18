const mongoose=require("mongoose");
const schema=new mongoose.Schema({userId:{type:mongoose.Schema.Types.ObjectId,ref:"User",required:true},propertyId:{type:mongoose.Schema.Types.ObjectId,ref:"Property",required:true}},{timestamps:true});
schema.index({userId:1,propertyId:1},{unique:true});
module.exports=mongoose.model("Favorite",schema);
