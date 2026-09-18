const r=require("express").Router(),Property=require("../models/Property"),{auth,role}=require("../middleware/auth");
r.get("/",async(req,res)=>{const q={status:"approved"};if(req.query.location)q.location=new RegExp(req.query.location,"i");if(req.query.type)q.type=req.query.type;if(req.query.maxRent)q.rent={$lte:Number(req.query.maxRent)};res.json(await Property.find(q).sort({createdAt:-1}))});
r.get("/:id",async(req,res)=>{const p=await Property.findById(req.params.id).populate("ownerId","name phone email");if(!p)return res.status(404).json({message:"Property not found"});res.json(p)});
r.post("/",auth,role("owner","admin"),async(req,res)=>res.status(201).json(await Property.create({...req.body,ownerId:req.user.id})));
r.put("/:id",auth,role("owner","admin"),async(req,res)=>{const p=await Property.findById(req.params.id);if(!p)return res.status(404).json({message:"Not found"});if(req.user.role==="owner"&&String(p.ownerId)!==req.user.id)return res.status(403).json({message:"Not your property"});Object.assign(p,req.body);await p.save();res.json(p)});
r.delete("/:id",auth,role("owner","admin"),async(req,res)=>{const p=await Property.findByIdAndDelete(req.params.id);res.json({message:"Property deleted"})});
module.exports=r;
