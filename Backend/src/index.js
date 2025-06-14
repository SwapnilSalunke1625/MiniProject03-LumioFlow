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
app.use(cors({
    origin: '*',
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization']
}));

// Parse JSON bodies
app.use(express.json());

// Mount routes before starting server
app.use('/api/power', powerRoutes);

// Add a basic test route
app.get('/test', (req, res) => {
    res.json({ message: 'Server is running!' });
});

connectDB()
.then(()=>{
    const PORT = process.env.PORT || 8000;
    app.listen(PORT, '0.0.0.0', ()=>{
        console.log(`🚀 Server is running at http://localhost:${PORT}`);
        console.log(`🌐 Server is accessible at http://192.168.235.50:${PORT}`);
        console.log(`📡 API endpoints:`);
        console.log(`   - http://localhost:${PORT}/test`);
        console.log(`   - http://localhost:${PORT}/api/power/test`);
    })
})
.catch((error)=>{
    console.log("❌ MONGODB connection failed! ", error)
})