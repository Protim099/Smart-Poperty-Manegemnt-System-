const jwt=require("jsonwebtoken");
function auth(req,res,next){const h=req.headers.authorization||"";const token=h.startsWith("Bearer ")?h.slice(7):null;if(!token)return res.status(401).json({message:"Authentication required"});try{req.user=jwt.verify(token,process.env.JWT_SECRET);next()}catch(e){res.status(401).json({message:"Invalid token"})}}
function role(...roles){return (req,res,next)=>roles.includes(req.user.role)?next():res.status(403).json({message:"Forbidden"})}
module.exports={auth,role};
