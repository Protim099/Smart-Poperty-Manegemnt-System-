const mongoose=require("mongoose");
const schema=new mongoose.Schema({name:{type:String,required:true},email:{type:String,required:true,unique:true,lowercase:true},password:{type:String,required:true},phone:String,role:{type:String,enum:["tenant","owner","admin"],default:"tenant"},avatar:String},{timestamps:true});
module.exports=mongoose.model("User",schema);
