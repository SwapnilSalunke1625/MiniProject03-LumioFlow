import express from 'express';
import PowerReading from '../models/PowerReading.js';
import { fileURLToPath } from 'url';
import path from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const router = express.Router();

// Test endpoint
router.get('/test', (req, res) => {
    res.json({ 
        success: true, 
        message: 'Server is working!',
        timestamp: new Date().toISOString()
    });
});

// POST endpoint to receive power readings from Arduino
router.post('/', async (req, res) => {
    try {
        let { voltage, current } = req.body;
        
        // Validate request
        if (!req.body) {
            return res.status(400).json({ 
                success: false, 
                message: 'No data received',
                error: 'EMPTY_BODY'
            });
        }
        
        if (voltage === undefined || current === undefined) {
            return res.status(400).json({ 
                success: false, 
                message: 'Missing voltage or current values',
                error: 'MISSING_VALUES'
            });
        }
        
        // Convert to numbers and handle invalid values
        voltage = parseFloat(voltage);
        current = parseFloat(current);
        
        if (isNaN(voltage) || isNaN(current)) {
            return res.status(400).json({ 
                success: false, 
                message: 'Invalid number values',
                error: 'INVALID_NUMBERS'
            });
        }
        
        // Check if voltage is below 200V
        if (voltage < 200) {
            voltage = 0;
            current = 0;
        }
        
        // Create new power reading
        const powerReading = new PowerReading({
            voltage,
            current,
            power: voltage * current
        });
        
        // Save to database
        await powerReading.save();
        
        res.status(200).json({ 
            success: true, 
            message: 'Power reading saved successfully',
            data: powerReading 
        });
   
    } catch (error) {
        res.status(400).json({ 
            success: false,
            message: error.message,
            error: error.name || 'UNKNOWN_ERROR'
        });
    }
});

// Get latest reading
router.get('/latest', async (req, res) => {
    try {
        const latestReading = await PowerReading.findOne()
            .sort({ timestamp: -1 });
        res.json(latestReading);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Get all readings
router.get('/', async (req, res) => {
    try {
        const readings = await PowerReading.find()
            .sort({ timestamp: -1 });
        res.json(readings);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

export default router; 