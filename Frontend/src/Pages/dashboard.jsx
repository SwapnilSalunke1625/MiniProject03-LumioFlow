import React, { useEffect, useState, useCallback } from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
  ReferenceLine
} from 'recharts';

const Dashboard = () => {
  // State management with proper initial values
  const [latestData, setLatestData] = useState({
    voltage: '0',
    current: '0',
    timestamp: new Date()
  });
  const [powerData, setPowerData] = useState({
    power: '0',
    energy: '0',
    bill: '0',
    dailyEnergy: '0',
    monthlyEnergy: '0'
  });
  const [history, setHistory] = useState([]);
  const [graphData, setGraphData] = useState([]);
  const [predictions, setPredictions] = useState({
    dailyBill: 0,
    weeklyBill: 0,
    monthlyBill: 0
  });
  const [stats, setStats] = useState({
    maxVoltage: 0,
    minVoltage: Infinity,
    maxCurrent: 0,
    maxPower: 0,
    avgPower: 0
  });
  const [isActive, setIsActive] = useState(false);

  // Constants
  const RATE_PER_KWH = 8; // ₹8 per kWh
  const UPDATE_INTERVAL = 1000; // 1 second
  const GRAPH_UPDATE_INTERVAL = 5000; // 5 seconds
  const MAX_HISTORY_POINTS = 100;
  const VOLTAGE_THRESHOLD = 200; // Voltage threshold in Volts

  // Utility functions
  const formatNumber = (num, decimals = 2) => {
    return isNaN(num) ? '0' : Number(num).toFixed(decimals);
  };

  const calculatePower = useCallback((voltage, current) => {
    const v = parseFloat(voltage);
    const i = parseFloat(current);
    return isNaN(v) || isNaN(i) ? 0 : v * i;
  }, []);

  // Fetch latest data
  const fetchLatestData = useCallback(async () => {
    try {
      const response = await fetch('http://localhost:5000/api/latest');
      if (!response.ok) throw new Error('Failed to fetch latest data');
      
      const data = await response.json();
      if (!data || typeof data.voltage !== 'number' || typeof data.current !== 'number') {
        throw new Error('Invalid data format');
      }

      const timestamp = new Date();
      const voltage = parseFloat(data.voltage);
      const current = parseFloat(data.current);
      const isVoltageValid = voltage > VOLTAGE_THRESHOLD;
      
      setLatestData({
        voltage: isVoltageValid ? formatNumber(voltage) : '0',
        current: isVoltageValid ? formatNumber(current) : '0',
        timestamp
      });

      // Update statistics only when voltage is valid
      if (isVoltageValid) {
        setStats(prev => ({
          maxVoltage: Math.max(prev.maxVoltage, voltage),
          minVoltage: Math.min(prev.minVoltage, voltage),
          maxCurrent: Math.max(prev.maxCurrent, current),
          maxPower: Math.max(prev.maxPower, calculatePower(voltage, current)),
          avgPower: (prev.avgPower * 0.9 + calculatePower(voltage, current) * 0.1)
        }));
      }

    } catch (error) {
      console.error('Error fetching latest data:', error);
      setLatestData(prev => ({ ...prev, voltage: 'Error', current: 'Error' }));
    }
  }, [calculatePower]);

  // Fetch historical data
  const fetchHistory = useCallback(async () => {
    try {
      const response = await fetch('http://localhost:5000/api/history');
      if (!response.ok) throw new Error('Failed to fetch history');
      
      const data = await response.json();
      if (!Array.isArray(data)) throw new Error('Invalid history data');

      setHistory(data.slice(-MAX_HISTORY_POINTS));
    } catch (error) {
      console.error('Error fetching history:', error);
    }
  }, []);

  // Calculate power data
  useEffect(() => {
    const voltage = parseFloat(latestData.voltage);
    const current = parseFloat(latestData.current);
    
    if (isNaN(voltage) || isNaN(current) || voltage <= VOLTAGE_THRESHOLD) {
      setPowerData({
        power: '0',
        energy: '0',
        bill: '0',
        dailyEnergy: '0',
        monthlyEnergy: '0'
      });
      return;
    }

    const power = calculatePower(voltage, current);
    const energyPerSecond = power / 3600000; // Convert W to kWh/s
    const billPerSecond = energyPerSecond * RATE_PER_KWH;

    // Calculate cumulative values
    const dailyEnergy = energyPerSecond * 24 * 3600; // kWh per day
    const monthlyEnergy = dailyEnergy * 30; // kWh per month

    setPowerData({
      power: formatNumber(power),
      energy: formatNumber(energyPerSecond, 6),
      bill: formatNumber(billPerSecond, 6),
      dailyEnergy: formatNumber(dailyEnergy, 3),
      monthlyEnergy: formatNumber(monthlyEnergy, 3)
    });

    // Update predictions
    setPredictions({
      dailyBill: formatNumber(billPerSecond * 24 * 3600),
      weeklyBill: formatNumber(billPerSecond * 24 * 3600 * 7),
      monthlyBill: formatNumber(billPerSecond * 24 * 3600 * 30)
    });

  }, [latestData, calculatePower]);

  // Set up data fetching intervals
  useEffect(() => {
    fetchLatestData();
    fetchHistory();

    const dataInterval = setInterval(fetchLatestData, UPDATE_INTERVAL);
    const historyInterval = setInterval(fetchHistory, GRAPH_UPDATE_INTERVAL);

    return () => {
      clearInterval(dataInterval);
      clearInterval(historyInterval);
    };
  }, [fetchLatestData, fetchHistory]);

  // Update graph data
  useEffect(() => {
    const updateGraph = () => {
      setGraphData(prev => {
        const voltage = parseFloat(latestData.voltage);
        const current = parseFloat(latestData.current);
        const power = calculatePower(voltage, current);
        
        const newPoint = {
          time: latestData.timestamp,
          power: power,
          voltage: voltage,
          current: current
        };

        // Keep last 60 points for better trend visualization
        const updatedData = [...prev.slice(-59), newPoint];
        return updatedData;
      });
    };

    const interval = setInterval(updateGraph, GRAPH_UPDATE_INTERVAL);
    return () => clearInterval(interval);
  }, [latestData, calculatePower]);

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-4xl font-bold mb-6 text-center text-indigo-600">PowerTrack Dashboard ⚡</h1>

      {/* Status Indicator */}
      <div className={`mb-6 p-4 rounded-lg text-center ${
        isActive ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'
      }`}>
        <p className="text-lg font-semibold">
          {isActive ? 'System Active (Voltage > 200V)' : ''}
        </p>
      </div>

      {/* Live Data Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
        {[
          { label: 'Voltage (V)', value: latestData.voltage, unit: 'V', color: 'text-blue-600' },
          { label: 'Current (A)', value: latestData.current, unit: 'A', color: 'text-red-600' },
          { label: 'Power (W)', value: powerData.power, unit: 'W', color: 'text-yellow-600' },
          { label: 'Energy (kWh)', value: powerData.energy, unit: 'kWh', color: 'text-green-600' },
        ].map(({ label, value, unit, color }) => (
          <div key={label} className="bg-white rounded-2xl shadow-md p-5 text-center">
            <p className="text-sm font-medium text-gray-500 mb-1">{label}</p>
            <p className={`text-4xl font-extrabold ${color}`}>{value} {unit}</p>
          </div>
        ))}
      </div>

      {/* Statistics Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
        <div className="bg-white rounded-2xl shadow-md p-5">
          <h3 className="text-lg font-semibold mb-4">Daily Statistics</h3>
          <div className="space-y-2">
            <p>Energy: {powerData.dailyEnergy} kWh</p>
            <p>Estimated Bill: ₹{predictions.dailyBill}</p>
          </div>
        </div>
        <div className="bg-white rounded-2xl shadow-md p-5">
          <h3 className="text-lg font-semibold mb-4">Weekly Statistics</h3>
          <div className="space-y-2">
            <p>Energy: {formatNumber(parseFloat(powerData.dailyEnergy) * 7)} kWh</p>
            <p>Estimated Bill: ₹{predictions.weeklyBill}</p>
          </div>
        </div>
        <div className="bg-white rounded-2xl shadow-md p-5">
          <h3 className="text-lg font-semibold mb-4">Monthly Statistics</h3>
          <div className="space-y-2">
            <p>Energy: {powerData.monthlyEnergy} kWh</p>
            <p>Estimated Bill: ₹{predictions.monthlyBill}</p>
          </div>
        </div>
      </div>

      {/* Records */}
      <div className="bg-white rounded-2xl shadow-md p-5 mb-10">
        <h3 className="text-lg font-semibold mb-4">Power Records</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div>
            <p className="text-sm text-gray-500">Max Voltage</p>
            <p className="text-xl font-bold">{formatNumber(stats.maxVoltage)} V</p>
          </div>
          <div>
            <p className="text-sm text-gray-500">Min Voltage</p>
            <p className="text-xl font-bold">{formatNumber(stats.minVoltage)} V</p>
          </div>
          <div>
            <p className="text-sm text-gray-500">Max Current</p>
            <p className="text-xl font-bold">{formatNumber(stats.maxCurrent)} A</p>
          </div>
          <div>
            <p className="text-sm text-gray-500">Max Power</p>
            <p className="text-xl font-bold">{formatNumber(stats.maxPower)} W</p>
          </div>
        </div>
      </div>

      {/* Real-time Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-10">
        {/* Voltage & Current Chart */}
        <div className="bg-white rounded-2xl shadow-md p-5">
          <h2 className="text-xl font-semibold mb-4">Voltage & Current History</h2>
          <p className="text-sm text-gray-500 mb-4">
            This graph shows the real-time voltage (left axis) and current (right axis) readings over time.
            Voltage is measured in Volts (V) and current in Amperes (A).
          </p>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={history.map(item => ({
              time: new Date(item.createdAt),
              voltage: item.voltage,
              current: item.current
            }))}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis 
                dataKey="time" 
                tickFormatter={(time) => new Date(time).toLocaleTimeString()} 
                label={{ value: 'Time', position: 'insideBottom', offset: -5 }}
              />
              <YAxis 
                yAxisId="voltage" 
                orientation="left" 
                stroke="#8884d8"
                label={{ value: 'Voltage (V)', angle: -90, position: 'insideLeft' }}
              />
              <YAxis 
                yAxisId="current" 
                orientation="right" 
                stroke="#82ca9d"
                label={{ value: 'Current (A)', angle: 90, position: 'insideRight' }}
              />
              <Tooltip 
                labelFormatter={(value) => new Date(value).toLocaleTimeString()}
                formatter={(value, name) => [formatNumber(value), name]}
                contentStyle={{ backgroundColor: 'rgba(255, 255, 255, 0.9)' }}
              />
              <Legend verticalAlign="top" height={36} />
              <Line 
                yAxisId="voltage"
                type="monotone" 
                dataKey="voltage" 
                stroke="#8884d8" 
                name="Voltage (V)"
                dot={false}
                strokeWidth={2}
              />
              <Line 
                yAxisId="current"
                type="monotone" 
                dataKey="current" 
                stroke="#82ca9d" 
                name="Current (A)"
                dot={false}
                strokeWidth={2}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Power Usage Chart */}
        <div className="bg-white rounded-2xl shadow-md p-5">
          <h2 className="text-xl font-semibold mb-4">Power Usage Trend</h2>
          <p className="text-sm text-gray-500 mb-4">
            This graph displays the real-time power consumption in Watts (W) over time.
            Power is calculated as the product of voltage and current (P = V × I).
          </p>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={graphData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis 
                dataKey="time" 
                tickFormatter={(time) => new Date(time).toLocaleTimeString()} 
                label={{ value: 'Time', position: 'insideBottom', offset: -5 }}
              />
              <YAxis 
                label={{ value: 'Power (W)', angle: -90, position: 'insideLeft' }}
                domain={[0, 'auto']}
              />
              <Tooltip 
                labelFormatter={(value) => new Date(value).toLocaleTimeString()}
                formatter={(value) => [formatNumber(value), 'Power (W)']}
                contentStyle={{ backgroundColor: 'rgba(255, 255, 255, 0.9)' }}
              />
              <Legend verticalAlign="top" height={36} />
              <Line 
                type="monotone" 
                dataKey="power" 
                stroke="#ff7300" 
                name="Power (W)"
                dot={false}
                strokeWidth={2}
                activeDot={{ r: 6 }}
              />
            </LineChart>
          </ResponsiveContainer>
          <div className="mt-4 text-sm text-gray-600">
            <p>Current Power: {powerData.power} W</p>
            <p>Average Power: {formatNumber(stats.avgPower)} W</p>
            <p>Peak Power: {formatNumber(stats.maxPower)} W</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
