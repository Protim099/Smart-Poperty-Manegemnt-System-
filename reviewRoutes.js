const r=require("express").Router(),Review=require("../models/Review"),{auth,role}=require("../middleware/auth");
r.post("/",auth,role("tenant"),async(req,res)=>res.status(201).json(await Review.create({tenantId:req.user.id,...req.body})));
r.get("/property/:id",async(req,res)=>res.json(await Review.find({propertyId:req.params.id}).populate("tenantId","name").sort({createdAt:-1})));
module.exports=r;
