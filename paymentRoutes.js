const r=require("express").Router(),Payment=require("../models/Payment"),Booking=require("../models/Booking"),{auth,role}=require("../middleware/auth");
r.post("/",auth,role("tenant"),async(req,res)=>{const {bookingId,amount,method,transactionId}=req.body;const b=await Booking.findOne({_id:bookingId,tenantId:req.user.id});if(!b)return res.status(404).json({message:"Booking not found"});const p=await Payment.create({bookingId,tenantId:req.user.id,amount,method,transactionId,status:"paid"});b.paymentStatus="paid";if(b.status==="approved")b.status="active";await b.save();res.status(201).json(p)});
r.get("/mine",auth,async(req,res)=>res.json(await Payment.find({tenantId:req.user.id}).sort({createdAt:-1})));
module.exports=r;
