import dotenv from "dotenv"
import connectDB from "./db/index.js"
import express from "express"
import {app} from "./app.js" 
import powerRoutes from './routes/powerRoutes.js';
import cors from 'cors';

dotenv.config({
    path:"./.env"
})

// Enable CORS for all routes
app.use(cors());

// Parse JSON bodies
app.use(express.json());

connectDB()
.then(()=>{
    app.listen(process.env.PORT || 7000, '0.0.0.0', ()=>{
        console.log(`Server is running at port ${process.env.PORT || 7000}`)
    })
})
.catch((error)=>{
    console.log("MONGODB connection is failed !!! ", error)
})

app.use('/api', powerRoutes);