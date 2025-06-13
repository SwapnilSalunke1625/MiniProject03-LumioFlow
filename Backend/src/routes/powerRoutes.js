import express from 'express';
import PowerReading from '../models/PowerReading.js';

const router = express.Router();

// Middleware to log all requests
router.use((req, res, next) => {
  console.log('\n🔵 ===== New Request =====');
  console.log('📡 Method:', req.method);
  console.log('🌐 URL:', req.url);
  console.log('⏰ Time:', new Date().toISOString());
  console.log('📦 Headers:', req.headers);
  console.log('📝 Body:', req.body);
  console.log('========================\n');
  next();
});

// POST endpoint to receive power readings from Arduino
router.post('/power', async (req, res) => {
  console.log('\n📥 POST /power - New Reading Received');
  console.log('Raw Request Body:', req.body);
  
  try {
    let { voltage, current } = req.body;
    console.log('Extracted Values:', { voltage, current });
    
    // Validate the data
    if (voltage === undefined || current === undefined) {
      console.error('❌ ERROR: Missing Data');
      console.error('Received Body:', req.body);
      console.error('Missing Fields:', {
        voltage: voltage === undefined ? 'missing' : 'present',
        current: current === undefined ? 'missing' : 'present'
      });
      return res.status(400).json({ 
        message: 'Missing required data',
        received: req.body 
      });
    }

    // Convert to numbers if they're strings
    voltage = Number(voltage);
    current = Number(current);
    console.log('Converted to Numbers:', { voltage, current });

    // Check if values are valid numbers
    if (isNaN(voltage) || isNaN(current)) {
      console.error('❌ ERROR: Invalid Number Format');
      console.error('Original Values:', req.body);
      console.error('Converted Values:', { voltage, current });
      return res.status(400).json({ 
        message: 'Invalid number format',
        received: req.body 
      });
    }
    
    // If voltage is below 200V, set all values to 0
    if (voltage < 200) {
      console.log('⚠️ WARNING: Low Voltage Detected');
      console.log('Original Values:', { voltage, current });
      voltage = 0;
      current = 0;
      console.log('Values Set to Zero:', { voltage, current });
    }
    
    // Calculate power (P = V * I)
    const power = voltage * current;
    console.log('Calculated Power:', power);
    
    const reading = new PowerReading({
      voltage,
      current,
      power // Add the calculated power
    });

    console.log('📝 Attempting to Save Reading:', reading);
    await reading.save();
    console.log('✅ SUCCESS: Reading Saved');
    console.log('Saved Reading:', reading);
    
    res.status(201).json({ 
      message: 'Reading saved successfully', 
      reading,
      timestamp: new Date()
    });
  } catch (error) {
    console.error('\n❌ ERROR: Failed to Save Reading');
    console.error('Error Details:', error);
    console.error('Request Body:', req.body);
    console.error('Stack Trace:', error.stack);
    res.status(500).json({ 
      message: 'Error saving power reading',
      error: error.message,
      received: req.body
    });
  }
});

// GET endpoint to retrieve power readings
router.get('/power', async (req, res) => {
  console.log('\n📥 GET /power - Fetching Readings');
  console.log('Query Parameters:', req.query);
  
  try {
    const { limit = 100, startDate, endDate } = req.query;
    console.log('Processed Parameters:', { limit, startDate, endDate });
    
    let query = {};
    if (startDate && endDate) {
      query.timestamp = {
        $gte: new Date(startDate),
        $lte: new Date(endDate)
      };
      console.log('Date Range Query:', query.timestamp);
    }

    console.log('Executing Query:', query);
    const readings = await PowerReading.find(query)
      .sort({ timestamp: -1 })
      .limit(parseInt(limit));

    console.log(`✅ SUCCESS: Retrieved ${readings.length} readings`);
    console.log('First Reading:', readings[0]);
    console.log('Last Reading:', readings[readings.length - 1]);
    
    res.json(readings);
  } catch (error) {
    console.error('\n❌ ERROR: Failed to Fetch Readings');
    console.error('Error Details:', error);
    console.error('Query Parameters:', req.query);
    console.error('Stack Trace:', error.stack);
    res.status(500).json({ message: 'Error fetching power readings' });
  }
});

// GET endpoint for latest reading
router.get('/power/latest', async (req, res) => {
  console.log('\n📥 GET /power/latest - Fetching Latest Reading');
  
  try {
    console.log('Executing Latest Reading Query');
    const latestReading = await PowerReading.findOne()
      .sort({ timestamp: -1 });
    
    if (latestReading) {
      console.log('✅ SUCCESS: Latest Reading Found');
      console.log('Latest Reading:', latestReading);
    } else {
      console.log('ℹ️ INFO: No Readings Found');
    }
    
    res.json(latestReading);
  } catch (error) {
    console.error('\n❌ ERROR: Failed to Fetch Latest Reading');
    console.error('Error Details:', error);
    console.error('Stack Trace:', error.stack);
    res.status(500).json({ message: 'Error fetching latest reading' });
  }
});

export default router; 