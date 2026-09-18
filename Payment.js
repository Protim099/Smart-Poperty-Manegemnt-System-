const mongoose=require("mongoose");
const schema=new mongoose.Schema({bookingId:{type:mongoose.Schema.Types.ObjectId,ref:"Booking",required:true},tenantId:{type:mongoose.Schema.Types.ObjectId,ref:"User",required:true},amount:Number,method:{type:String,enum:["bkash","nagad","card","cash"]},transactionId:String,status:{type:String,enum:["pending","paid","failed","refunded"],default:"pending"}},{timestamps:true});
module.exports=mongoose.model("Payment",schema);
