import express from 'express';
import PowerReading from '../models/PowerReading.js';

const router = express.Router();

// POST endpoint to receive power readings from Arduino
router.post('/', async (req, res) => {
    try {
        let { voltage, current } = req.body;
        
        // Convert to numbers and handle invalid values
        voltage = parseFloat(voltage);
        current = parseFloat(current);
        
        // Check if voltage is below 200V
        if (voltage < 200) {
            voltage = 0;
            current = 0;
        }
        
        // Create new power reading
        const powerReading = new PowerReading({
            voltage,
            current
        });
        
        // Save to database
        await powerReading.save();
        
        res.status(201).json(powerReading);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// GET endpoint to fetch latest reading
router.get('/latest', async (req, res) => {
    try {
        const latestReading = await PowerReading.findOne()
            .sort({ timestamp: -1 });
        res.json(latestReading);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// GET endpoint to fetch all readings
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