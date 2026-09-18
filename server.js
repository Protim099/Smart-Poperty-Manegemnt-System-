require("dotenv").config();const express=require("express"),cors=require("cors"),helmet=require("helmet"),rateLimit=require("express-rate-limit"),morgan=require("morgan"),connectDB=require("./config/db");
const app=express();app.use(helmet());app.use(cors({origin:process.env.CLIENT_URL||"http://localhost:3000"}));app.use(express.json({limit:"2mb"}));app.use(morgan("dev"));app.use(rateLimit({windowMs:15*60*1000,max:300}));
app.get("/",(req,res)=>res.json({name:"SmartRent API",status:"running"}));app.get("/api/health",(req,res)=>res.json({status:"ok"}));
app.use("/api/auth",require("./routes/authRoutes"));app.use("/api/properties",require("./routes/propertyRoutes"));app.use("/api/bookings",require("./routes/bookingRoutes"));app.use("/api/payments",require("./routes/paymentRoutes"));app.use("/api/reviews",require("./routes/reviewRoutes"));app.use("/api/favorites",require("./routes/favoriteRoutes"));
app.use((err,req,res,next)=>{console.error(err);res.status(500).json({message:"Server error"})});
const PORT=process.env.PORT||5000;connectDB().then(()=>app.listen(PORT,()=>console.log(`API running on http://localhost:${PORT}`))).catch(e=>{console.error(e);process.exit(1)});
