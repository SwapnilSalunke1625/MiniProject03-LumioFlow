import dotenv from "dotenv"
import connectDB from "./db/index.js"
import express from "express"
import {app} from "./app.js" 



dotenv.config({
    path:"./.env"
})

connectDB()
.then(()=>{
    app.listen(process.env.PORT || 1010 , ()=>{
        console.log(`Server is running at port ${process.env.PORT}`)
    })
    
})
.catch((error)=>{
    console.log("MONGODB connection is failed !!! ", error)
})