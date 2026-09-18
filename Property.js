const mongoose=require("mongoose");
const schema=new mongoose.Schema({ownerId:{type:mongoose.Schema.Types.ObjectId,ref:"User",required:true},title:{type:String,required:true},type:{type:String,default:"Apartment"},location:String,address:String,rent:{type:Number,required:true},deposit:Number,bedrooms:Number,bathrooms:Number,area:Number,furnished:Boolean,parking:Boolean,description:String,images:[String],status:{type:String,enum:["pending","approved","rejected","rented"],default:"pending"},availableFrom:Date},{timestamps:true});
module.exports=mongoose.model("Property",schema);
