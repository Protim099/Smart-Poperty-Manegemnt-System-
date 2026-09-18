const r=require("express").Router(),Favorite=require("../models/Favorite"),{auth,role}=require("../middleware/auth");
r.get("/",auth,async(req,res)=>res.json(await Favorite.find({userId:req.user.id}).populate("propertyId")));
r.post("/:propertyId",auth,async(req,res)=>res.status(201).json(await Favorite.create({userId:req.user.id,propertyId:req.params.propertyId})));
r.delete("/:propertyId",auth,async(req,res)=>{await Favorite.deleteOne({userId:req.user.id,propertyId:req.params.propertyId});res.json({message:"Removed"})});
module.exports=r;
