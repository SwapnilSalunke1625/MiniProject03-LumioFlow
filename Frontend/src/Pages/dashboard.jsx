import React, { useState, useEffect } from 'react';
import { LineChart, Line, AreaChart, Area, BarChart, Bar, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { Zap, TrendingUp, AlertTriangle, Lightbulb, Leaf, DollarSign, Power, Activity, Eye, EyeOff } from 'lucide-react';

const Dashboard = () => {
  const [readings, setReadings] = useState([]);
  const [predictions, setPredictions] = useState({
    daily: 0,
    weekly: 0,
    monthly: 0
  });
  const [powerAlerts, setPowerAlerts] = useState([]);
  const [showTips, setShowTips] = useState(false);
  const [selectedTimeFrame, setSelectedTimeFrame] = useState('daily');
  const [isConnected, setIsConnected] = useState(false);

  // Energy saving tips
  const energyTips = [
    {
      icon: <Leaf className="w-8 h-8 text-emerald-400" />,
      title: "Optimize AC Usage",
      description: "Set your AC to 24°C for optimal comfort and energy efficiency",
      color: "emerald"
    },
    {
      icon: <Lightbulb className="w-8 h-8 text-amber-400" />,
      title: "Use LED Lighting",
      description: "Switch to LED bulbs to reduce lighting energy consumption by up to 80%",
      color: "amber"
    },
    {
      icon: <Zap className="w-8 h-8 text-blue-400" />,
      title: "Unplug Devices",
      description: "Unplug devices when not in use to prevent phantom power consumption",
      color: "blue"
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-purple-400" />,
      title: "Smart Scheduling",
      description: "Schedule high-power devices to run during off-peak hours",
      color: "purple"
    }
  ];

  useEffect(() => {
    fetchReadings();
    const interval = setInterval(fetchReadings, 5000);
    return () => clearInterval(interval);
  }, []);

  const fetchReadings = async () => {
    try {
      console.log('Attempting to fetch from:', 'http://192.168.235.50:8000/api/power');
      const response = await fetch('http://192.168.235.50:8000/api/power');
      
      if (!response.ok) {
        console.error('Server response not OK:', response.status, response.statusText);
        throw new Error(`Failed to fetch readings: ${response.status} ${response.statusText}`);
      }

      const data = await response.json();
      console.log('Raw API response:', data);
      
      // Ensure data is an array and has the required properties
      if (!Array.isArray(data)) {
        console.error('Invalid data format received:', data);
        throw new Error('Invalid data format: Expected an array');
      }

      // Validate each reading has required properties
      const validData = data.filter(reading => {
        const isValid = reading && 
          typeof reading.voltage === 'number' && 
          typeof reading.current === 'number' && 
          typeof reading.power === 'number' &&
          reading.timestamp;
        
        if (!isValid) {
          console.warn('Invalid reading found:', reading);
        }
        return isValid;
      });

      if (validData.length === 0) {
        console.error('No valid readings found in data');
        throw new Error('No valid readings found');
      }

      // Sort data by timestamp in descending order (newest first)
      const sortedData = validData.sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp));
      console.log('Processed valid data:', sortedData);
      
      setReadings(sortedData);
      calculatePredictions(sortedData);
      checkPowerAlerts(sortedData);
      setIsConnected(true);
    } catch (error) {
      console.error('Error in fetchReadings:', error);
      setIsConnected(false);
      // Generate mock data for demo
      generateMockData();
    }
  };

  const generateMockData = () => {
    const now = Date.now();
    const mockData = Array.from({ length: 24 }, (_, i) => {
      // Create timestamp in IST
      const timestamp = new Date(now - (23 - i) * 60 * 60 * 1000);
      const hour = timestamp.getHours();
      
      // Base values
      const baseVoltage = 220;
      const baseCurrent = 8;
      
      // Time-based multiplier (higher during day, lower at night)
      const isDaytime = hour >= 6 && hour <= 18;
      const timeMultiplier = isDaytime ? 1.2 : 0.8;
      
      // Generate values with realistic variations
      const voltage = baseVoltage + (Math.random() * 10 - 5);
      const current = (baseCurrent * timeMultiplier) + (Math.random() * 2 - 1);
      const power = voltage * current;

      // Ensure values are within realistic ranges
      const clampedVoltage = Math.min(Math.max(voltage, 200), 250);
      const clampedCurrent = Math.min(Math.max(current, 0), 15);
      const clampedPower = clampedVoltage * clampedCurrent;

      return {
        timestamp: timestamp.toISOString(),
        voltage: Number(clampedVoltage.toFixed(2)),
        current: Number(clampedCurrent.toFixed(2)),
        power: Number(clampedPower.toFixed(2))
      };
    });

    console.log('Generated mock data:', mockData);
    setReadings(mockData);
    calculatePredictions(mockData);
    checkPowerAlerts(mockData);
  };

  const calculatePredictions = (data) => {
    if (!data || data.length === 0) {
      console.log('No data available for predictions');
      setPredictions({
        daily: 0,
        weekly: 0,
        monthly: 0
      });
      return;
    }

    try {
      // Get the latest reading
      const latestReading = data[0]; // Since data is sorted newest first
      const ratePerKWh = 5; // ₹5 per kWh

      // Calculate average power over the last hour
      const oneHourAgo = new Date(Date.now() - 60 * 60 * 1000);
      const recentReadings = data.filter(reading => new Date(reading.timestamp) >= oneHourAgo);
      
      let averagePower = 0;
      if (recentReadings.length > 0) {
        averagePower = recentReadings.reduce((sum, reading) => sum + reading.power, 0) / recentReadings.length;
      } else {
        averagePower = latestReading.power;
      }

      // Calculate power in kW
      const powerInKW = averagePower / 1000;

      // Calculate predictions
      const dailyPrediction = powerInKW * 24 * ratePerKWh;
      const weeklyPrediction = dailyPrediction * 7;
      const monthlyPrediction = dailyPrediction * 30;

      console.log('Bill Predictions:', {
        averagePower,
        powerInKW,
        dailyPrediction,
        weeklyPrediction,
        monthlyPrediction
      });

      setPredictions({
        daily: Number(dailyPrediction.toFixed(2)),
        weekly: Number(weeklyPrediction.toFixed(2)),
        monthly: Number(monthlyPrediction.toFixed(2))
      });
    } catch (error) {
      console.error('Error calculating predictions:', error);
      setPredictions({
        daily: 0,
        weekly: 0,
        monthly: 0
      });
    }
  };

  const checkPowerAlerts = (data) => {
    if (!data || data.length === 0) {
      setPowerAlerts([]);
      return;
    }

    try {
      const latestReading = data[0]; // Since data is sorted newest first
      const alerts = [];

      // Voltage checks
      if (latestReading.voltage < 200) {
        alerts.push({
          type: 'warning',
          message: 'Low voltage detected. Please check your power supply.',
          icon: <AlertTriangle className="w-5 h-5" />
        });
      } else if (latestReading.voltage > 250) {
        alerts.push({
          type: 'warning',
          message: 'High voltage detected. Please check your power supply.',
          icon: <AlertTriangle className="w-5 h-5" />
        });
      }

      // Power consumption checks
      if (latestReading.power > 2000) {
        alerts.push({
          type: 'alert',
          message: 'High power consumption detected. Consider reducing load.',
          icon: <Zap className="w-5 h-5" />
        });
      } else if (latestReading.power > 1000 && latestReading.power <= 2000) {
        alerts.push({
          type: 'info',
          message: 'Moderate power consumption. Monitor your usage.',
          icon: <Activity className="w-5 h-5" />
        });
      }

      // Current checks
      if (latestReading.current > 10) {
        alerts.push({
          type: 'warning',
          message: 'High current detected. Check for potential overload.',
          icon: <AlertTriangle className="w-5 h-5" />
        });
      }

      // Check for sudden power spikes
      if (data.length >= 2) {
        const previousReading = data[1];
        const powerChange = Math.abs(latestReading.power - previousReading.power);
        if (powerChange > 500) {
          alerts.push({
            type: 'info',
            message: 'Sudden power change detected. Check your appliances.',
            icon: <Activity className="w-5 h-5" />
          });
        }
      }

      console.log('Power alerts generated:', alerts);
      setPowerAlerts(alerts);
    } catch (error) {
      console.error('Error checking power alerts:', error);
      setPowerAlerts([]);
    }
  };

  const getChartData = () => {
    if (!isConnected || !readings || readings.length === 0) {
      return Array(24).fill({
        time: '00:00',
        power: 0,
        voltage: 0,
        current: 0
      });
    }

    // Get the last 24 readings
    const recentReadings = readings.slice(0, 24);
    
    // Format the data for charts with IST
    const formattedData = recentReadings.map(reading => {
      const timestamp = new Date(reading.timestamp);
      return {
        time: timestamp.toLocaleTimeString('en-IN', { 
          hour: '2-digit', 
          minute: '2-digit',
          hour12: false,
          timeZone: 'Asia/Kolkata'
        }),
        power: Number(reading.power.toFixed(2)),
        voltage: Number(reading.voltage.toFixed(2)),
        current: Number(reading.current.toFixed(2)),
        timestamp: timestamp.getTime()
      };
    });

    // Sort by timestamp in ascending order for proper chart display
    return formattedData.sort((a, b) => a.timestamp - b.timestamp);
  };

  const getDistributionData = () => {
    if (!isConnected || !readings || readings.length === 0) {
      return [
        { name: 'Base Load', value: 0, color: '#3b82f6' },
        { name: 'Average', value: 0, color: '#10b981' },
        { name: 'Peak', value: 0, color: '#ef4444' }
      ];
    }

    const powerValues = readings.map(r => Number(r.power.toFixed(2)));
    const average = Number((powerValues.reduce((a, b) => a + b, 0) / powerValues.length).toFixed(2));
    const peak = Number(Math.max(...powerValues).toFixed(2));
    const base = Number(Math.min(...powerValues).toFixed(2));

    return [
      { name: 'Base Load', value: base, color: '#3b82f6' },
      { name: 'Average', value: average, color: '#10b981' },
      { name: 'Peak', value: peak, color: '#ef4444' }
    ];
  };

  const getCurrentReading = () => {
    if (!isConnected || !readings || readings.length === 0) {
      return { voltage: 0, current: 0, power: 0 };
    }
    // Always return the first reading since data is sorted by newest first
    return readings[0];
  };

  const getCurrentPrediction = () => {
    if (!isConnected) return 0;
    switch (selectedTimeFrame) {
      case 'daily': return predictions.daily;
      case 'weekly': return predictions.weekly;
      case 'monthly': return predictions.monthly;
      default: return predictions.daily;
    }
  };

  const currentReading = getCurrentReading();

  // Update the recent readings table to show latest readings first with IST
  const getRecentReadings = () => {
    if (!readings || readings.length === 0) {
      return [];
    }
    // Return the 10 most recent readings
    return readings.slice(0, 10);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-100 via-indigo-50 to-slate-200 text-slate-800">
      <br /><br />
      <div className="relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-200 to-purple-200 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-emerald-200 to-blue-200 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="relative z-10 p-8">
          <div className="max-w-7xl mx-auto space-y-8">
            {/* Header */}
            <div className="text-center space-y-4">
              <div className="flex items-center justify-center space-x-4">
                <div className="p-3 rounded-full bg-gradient-to-r from-emerald-300 to-blue-300">
                  <Zap className="w-8 h-8 text-white" />
                </div>
                <h1 className="text-5xl font-bold bg-gradient-to-r from-emerald-500 via-blue-500 to-purple-500 bg-clip-text text-transparent">
                  Energy Dashboard
                </h1>
                <br /><br />
              </div>
              <p className="text-xl text-slate-600">Real-time power consumption monitoring & optimization</p>
            </div>

            {/* Alerts */}
            {powerAlerts.length > 0 && (
              <div className="grid gap-4">
                {powerAlerts.map((alert, index) => (
                  <div
                    key={index}
                    className={`p-4 rounded-2xl backdrop-blur-xl border transition-all duration-300 hover:scale-[1.01] ${
                      alert.type === 'warning'
                        ? 'bg-red-100 border-red-300 text-red-700'
                        : alert.type === 'alert'
                        ? 'bg-amber-100 border-amber-300 text-amber-700'
                        : 'bg-blue-100 border-blue-300 text-blue-700'
                    }`}
                  >
                    <div className="flex items-center space-x-3">
                      {alert.icon}
                      <p className="font-medium">{alert.message}</p>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Main Metrics - Smaller Cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="bg-white/80 backdrop-blur-xl rounded-2xl p-4 border border-slate-200 hover:border-emerald-300 transition-all duration-300">
                <div className="flex items-center justify-between mb-2">
                  <Power className="w-5 h-5 text-emerald-500" />
                  <span className="text-xs text-slate-500">VOLTAGE</span>
                </div>
                <p className="text-2xl font-bold text-slate-800">{currentReading.voltage.toFixed(1)}<span className="text-sm text-slate-500 ml-1">V</span></p>
              </div>

              <div className="bg-white/80 backdrop-blur-xl rounded-2xl p-4 border border-slate-200 hover:border-blue-300 transition-all duration-300">
                <div className="flex items-center justify-between mb-2">
                  <Activity className="w-5 h-5 text-blue-500" />
                  <span className="text-xs text-slate-500">CURRENT</span>
                </div>
                <p className="text-2xl font-bold text-slate-800">{currentReading.current.toFixed(2)}<span className="text-sm text-slate-500 ml-1">A</span></p>
              </div>

              <div className="bg-white/80 backdrop-blur-xl rounded-2xl p-4 border border-slate-200 hover:border-purple-300 transition-all duration-300">
                <div className="flex items-center justify-between mb-2">
                  <Zap className="w-5 h-5 text-purple-500" />
                  <span className="text-xs text-slate-500">POWER</span>
                </div>
                <p className="text-2xl font-bold text-slate-800">{currentReading.power.toFixed(0)}<span className="text-sm text-slate-500 ml-1">W</span></p>
              </div>

              <div className="bg-white/80 backdrop-blur-xl rounded-2xl p-4 border border-slate-200 hover:border-amber-300 transition-all duration-300">
                <div className="flex items-center justify-between mb-2">
                  <DollarSign className="w-5 h-5 text-amber-500" />
                  <span className="text-xs text-slate-500">COST</span>
                </div>
                <p className="text-2xl font-bold text-slate-800">₹{getCurrentPrediction().toFixed(0)}</p>
              </div>
            </div>

            {/* Bill Prediction Card */}
            <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-8 border border-slate-200">
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-8">
                <div>
                  <h3 className="text-2xl font-bold text-slate-800 mb-2">Bill Prediction</h3>
                  <p className="text-slate-600">Based on current consumption patterns</p>
                </div>
                <div className="flex space-x-2 mt-4 md:mt-0">
                  {['daily', 'weekly', 'monthly'].map((period) => (
                    <button
                      key={period}
                      onClick={() => setSelectedTimeFrame(period)}
                      className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                        selectedTimeFrame === period
                          ? 'bg-gradient-to-r from-emerald-400 to-blue-400 text-white'
                          : 'bg-slate-200 text-slate-600 hover:bg-slate-300'
                      }`}
                    >
                      {period.charAt(0).toUpperCase() + period.slice(1)}
                    </button>
                  ))}
                </div>
              </div>
              <div className="text-center">
                <p className="text-6xl font-bold bg-gradient-to-r from-emerald-500 to-blue-500 bg-clip-text text-transparent">
                  ₹{getCurrentPrediction().toFixed(2)}
                </p>
                <p className="text-xl text-slate-600 mt-2">Estimated {selectedTimeFrame} bill</p>
              </div>
            </div>

            {/* Large Charts Grid */}
            <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
              {/* Power Consumption Chart */}
              <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-8 border border-slate-200">
                <h3 className="text-2xl font-bold text-slate-800 mb-6">Power Consumption Timeline</h3>
                <div className="h-96">
                  <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={getChartData()}>
                      <defs>
                        <linearGradient id="powerGradient" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor="#10b981" stopOpacity={0.3}/>
                          <stop offset="95%" stopColor="#10b981" stopOpacity={0}/>
                        </linearGradient>
                      </defs>
                      <CartesianGrid strokeDasharray="3 3" stroke="#d1d5db" />
                      <XAxis 
                        dataKey="time" 
                        stroke="#6b7280" 
                        fontSize={12}
                        tickLine={false}
                        axisLine={false}
                        interval="preserveStartEnd"
                        minTickGap={30}
                      />
                      <YAxis 
                        stroke="#6b7280" 
                        fontSize={12}
                        tickLine={false}
                        axisLine={false}
                        domain={[0, 'auto']}
                        tickFormatter={(value) => `${value.toFixed(0)}W`}
                      />
                      <Tooltip 
                        contentStyle={{ 
                          backgroundColor: 'rgba(255,255,255,0.9)', 
                          border: '1px solid rgba(0,0,0,0.1)',
                          borderRadius: '12px',
                          color: '#1f2937'
                        }}
                        formatter={(value) => [`${value.toFixed(2)} W`, 'Power']}
                        labelFormatter={(label) => `Time: ${label}`}
                      />
                      <Area
                        type="monotone"
                        dataKey="power"
                        stroke="#10b981"
                        strokeWidth={3}
                        fillOpacity={1}
                        fill="url(#powerGradient)"
                        isAnimationActive={true}
                        dot={false}
                      />
                    </AreaChart>
                  </ResponsiveContainer>
                </div>
              </div>

              {/* Multi-parameter Chart */}
              <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-8 border border-slate-200">
                <h3 className="text-2xl font-bold text-slate-800 mb-6">Real-time Parameters</h3>
                <div className="h-96">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={getChartData()}>
                      <CartesianGrid strokeDasharray="3 3" stroke="#d1d5db" />
                      <XAxis 
                        dataKey="time" 
                        stroke="#6b7280" 
                        fontSize={12}
                        tickLine={false}
                        axisLine={false}
                        interval="preserveStartEnd"
                        minTickGap={30}
                      />
                      <YAxis 
                        stroke="#6b7280" 
                        fontSize={12}
                        tickLine={false}
                        axisLine={false}
                        domain={[0, 'auto']}
                        tickFormatter={(value) => `${value.toFixed(1)}`}
                      />
                      <Tooltip 
                        contentStyle={{ 
                          backgroundColor: 'rgba(255,255,255,0.9)', 
                          border: '1px solid rgba(0,0,0,0.1)',
                          borderRadius: '12px',
                          color: '#1f2937'
                        }}
                        formatter={(value, name) => {
                          const unit = name === 'voltage' ? 'V' : name === 'current' ? 'A' : 'W';
                          return [`${value.toFixed(2)} ${unit}`, name.charAt(0).toUpperCase() + name.slice(1)];
                        }}
                        labelFormatter={(label) => `Time: ${label}`}
                      />
                      <Legend />
                      <Line 
                        type="monotone" 
                        dataKey="voltage" 
                        stroke="#3b82f6" 
                        strokeWidth={2}
                        dot={false}
                        name="Voltage (V)"
                        isAnimationActive={true}
                      />
                      <Line 
                        type="monotone" 
                        dataKey="current" 
                        stroke="#8b5cf6" 
                        strokeWidth={2}
                        dot={false}
                        name="Current (A)"
                        isAnimationActive={true}
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              </div>

              {/* Distribution Chart */}
              <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-8 border border-slate-200">
                <h3 className="text-2xl font-bold text-slate-800 mb-6">Power Distribution</h3>
                <div className="h-96">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={getDistributionData()}
                        cx="50%"
                        cy="50%"
                        innerRadius={60}
                        outerRadius={120}
                        paddingAngle={5}
                        dataKey="value"
                        label={({ name, value }) => `${name}: ${value.toFixed(0)}W`}
                      >
                        {getDistributionData().map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                      </Pie>
                      <Tooltip 
                        contentStyle={{ 
                          backgroundColor: 'rgba(255,255,255,0.9)', 
                          border: '1px solid rgba(0,0,0,0.1)',
                          borderRadius: '12px',
                          color: '#1f2937'
                        }}
                        formatter={(value) => `${value.toFixed(2)} W`}
                      />
                      <Legend />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
              </div>

              {/* Hourly Consumption Bar Chart */}
              <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-8 border border-slate-200">
                <h3 className="text-2xl font-bold text-slate-800 mb-6">Hourly Consumption</h3>
                <div className="h-96">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={getChartData()}>
                      <CartesianGrid strokeDasharray="3 3" stroke="#d1d5db" />
                      <XAxis 
                        dataKey="time" 
                        stroke="#6b7280" 
                        fontSize={12}
                        tickLine={false}
                        axisLine={false}
                        interval="preserveStartEnd"
                        minTickGap={30}
                      />
                      <YAxis 
                        stroke="#6b7280" 
                        fontSize={12}
                        tickLine={false}
                        axisLine={false}
                        domain={[0, 'auto']}
                        tickFormatter={(value) => `${value.toFixed(0)}W`}
                      />
                      <Tooltip 
                        contentStyle={{ 
                          backgroundColor: 'rgba(255,255,255,0.9)', 
                          border: '1px solid rgba(0,0,0,0.1)',
                          borderRadius: '12px',
                          color: '#1f2937'
                        }}
                        formatter={(value) => [`${value.toFixed(2)} W`, 'Power']}
                        labelFormatter={(label) => `Time: ${label}`}
                      />
                      <Bar 
                        dataKey="power" 
                        fill="url(#barGradient)"
                        radius={[4, 4, 0, 0]}
                      />
                      <defs>
                        <linearGradient id="barGradient" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor="#06b6d4" stopOpacity={0.8}/>
                          <stop offset="95%" stopColor="#06b6d4" stopOpacity={0.2}/>
                        </linearGradient>
                      </defs>
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </div>

            {/* Energy Saving Tips */}
            <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-8 border border-slate-200">
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-3xl font-bold bg-gradient-to-r from-emerald-500 to-blue-500 bg-clip-text text-transparent">
                  Energy Saving Tips
                </h2>
                <button
                  onClick={() => setShowTips(!showTips)}
                  className="flex items-center space-x-2 px-6 py-3 rounded-xl bg-gradient-to-r from-emerald-400 to-blue-400 text-white font-medium hover:from-emerald-500 hover:to-blue-500 transition-all duration-300"
                >
                  {showTips ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                  <span>{showTips ? 'Hide Tips' : 'Show Tips'}</span>
                </button>
              </div>
              
              {showTips && (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {energyTips.map((tip, index) => (
                    <div
                      key={index}
                      className="bg-white/80 backdrop-blur-xl rounded-2xl p-6 border border-slate-200 hover:border-slate-300 transition-all duration-300 hover:scale-105"
                    >
                      <div className="mb-4">{tip.icon}</div>
                      <h3 className="text-xl font-semibold text-slate-800 mb-2">{tip.title}</h3>
                      <p className="text-slate-600">{tip.description}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Recent Readings Table */}
            <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-8 border border-slate-200">
              <h2 className="text-2xl font-bold text-slate-800 mb-6">Recent Readings</h2>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-slate-200">
                      <th className="text-left py-4 px-4 text-slate-500 font-medium">Time</th>
                      <th className="text-left py-4 px-4 text-slate-500 font-medium">Voltage (V)</th>
                      <th className="text-left py-4 px-4 text-slate-500 font-medium">Current (A)</th>
                      <th className="text-left py-4 px-4 text-slate-500 font-medium">Power (W)</th>
                    </tr>
                  </thead>
                  <tbody>
                    {getRecentReadings().map((reading, index) => (
                      <tr key={index} className="border-b border-slate-100 hover:bg-slate-50 transition-all duration-200">
                        <td className="py-4 px-4 text-slate-800">
                          {new Date(reading.timestamp).toLocaleTimeString('en-IN', {
                            hour: '2-digit',
                            minute: '2-digit',
                            second: '2-digit',
                            hour12: false,
                            timeZone: 'Asia/Kolkata'
                          })}
                        </td>
                        <td className="py-4 px-4 text-emerald-600 font-medium">
                          {reading.voltage.toFixed(2)}
                        </td>
                        <td className="py-4 px-4 text-blue-600 font-medium">
                          {reading.current.toFixed(2)}
                        </td>
                        <td className="py-4 px-4 text-purple-600 font-medium">
                          {reading.power.toFixed(2)}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;