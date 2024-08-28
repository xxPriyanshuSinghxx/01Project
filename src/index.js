// require('dotenv').config({path: './env'})
import dotenv  from "dotenv";
// import mongoose from "mongoose";
// import { DB_NAME } from "./constants";
// import express from "express";
// const app = express()
import connectDB  from "./db/index.js";
import {app} from "./app.js";
dotenv.config({
    path: './env'
})

connectDB()
.then(()=>{
    app.listen(process.env.PORT || 8000,()=>{
        console.log(`App is listening on port : ${process.env.PORT}`);
    })
})
.catch((error)=>{
    console.log("MongoDB connection failed here: ", error);
    process.exit(1)
})












// ;(async ()=>{
//     try {

//         await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`)
//         app.on("error",(error)=>{
//             console.log("ERROR: ", error)
//             throw error
            
//         })
//         app.listen(process.env.PORT,()=>{
//             console.log( `App is listening on port ${process.env.PORT}`)
//         })
//     } catch (error) {
//         console.error("ERROR: ",error);
//         throw error
//     }
// })()

