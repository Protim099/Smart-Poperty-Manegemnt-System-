const mongoose=require("mongoose");
const schema=new mongoose.Schema({propertyId:{type:mongoose.Schema.Types.ObjectId,ref:"Property",required:true},tenantId:{type:mongoose.Schema.Types.ObjectId,ref:"User",required:true},rating:{type:Number,min:1,max:5,required:true},comment:String},{timestamps:true});
module.exports=mongoose.model("Review",schema);
