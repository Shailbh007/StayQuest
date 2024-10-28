import express from "express"
import dotenv from "dotenv"
import mongoose from "mongoose"
import authRoutes from "./routes/auth.js"
import usersRoutes from "./routes/users.js"
import houseRoutes from "./routes/house.js"
import cookieParser from "cookie-parser"
const app=express();
dotenv.config();

const connect=async()=>{
    try {
        await mongoose.connect(process.env.MONGO);
        console.log("connected to mongoDB")
    } catch (error) {
        throw error;   
    }
}
mongoose.connection.on("disconnected",()=>{
    console.log("mongoDB disconnected")
})
mongoose.connection.on("connected",()=>{
    console.log("mongoDB connected")
})
app.get("/",(req,res)=>{
    res.send("hello")
})
    app.use(cookieParser())
    app.use(express.json())
    //middleware 
    app.use("/api/auth",authRoutes)
    app.use("/api/house",houseRoutes)
    app.use("/api/user",usersRoutes)
    // app.use("/api/room",roomRoutes)

    app.use((err,req,res,next)=>
{
    const errorStatus=err.status || 500
    const errorMessage=err.message || "Something went wrong"
    return res.status(errorStatus).json({
        success:false,
        status:errorStatus,
        message:errorMessage,
        stack:err.stack,

})
})
    

app.listen(5000,()=>{
    connect();
    console.log("server is running")
})