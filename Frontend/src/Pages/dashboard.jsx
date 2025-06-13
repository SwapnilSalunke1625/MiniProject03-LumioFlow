import React, { useState, useEffect } from 'react';
import { Line, Bar, Doughnut } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import axios from 'axios';

// Register ChartJS components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend
);

const Dashboard = () => {
  const [readings, setReadings] = useState([]);
  const [latestReading, setLatestReading] = useState(null);
  const [isVoltageLow, setIsVoltageLow] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [predictionData, setPredictionData] = useState({
    daily: 0,
    weekly: 0,
    monthly: 0
  });
  const [powerAlerts, setPowerAlerts] = useState([]);
  const [showTips, setShowTips] = useState(false);

  // Energy saving tips
  const energyTips = [
    {
      title: "Optimize AC Usage",
      description: "Set your AC temperature to 24°C for optimal energy efficiency",
      icon: "❄️"
    },
    {
      title: "LED Lighting",
      description: "Switch to LED bulbs to reduce power consumption by up to 80%",
      icon: "💡"
    },
    {
      title: "Standby Power",
      description: "Unplug devices when not in use to prevent phantom power consumption",
      icon: "🔌"
    },
    {
      title: "Smart Scheduling",
      description: "Use timers for heavy appliances during off-peak hours",
      icon: "⏰"
    }
  ];

  // Fetch all readings
  const fetchReadings = async () => {
    try {
      const response = await axios.get('http://localhost:8000/api/power');
      setReadings(response.data);
      calculatePredictions(response.data);
      checkPowerAlerts(response.data);
      setError(null);
    } catch (err) {
      setError('Failed to fetch readings');
      console.error('Error fetching readings:', err);
    }
  };

  // Fetch latest reading
  const fetchLatestReading = async () => {
    try {
      const response = await axios.get('http://localhost:8000/api/power/latest');
      setLatestReading(response.data);
      setIsVoltageLow(response.data?.voltage < 200);
      setError(null);
    } catch (err) {
      setError('Failed to fetch latest reading');
      console.error('Error fetching latest reading:', err);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchReadings();
    fetchLatestReading();
    const interval = setInterval(fetchLatestReading, 1000);
    return () => clearInterval(interval);
  }, []);

  // Check for power alerts
  const checkPowerAlerts = (data) => {
    const alerts = [];
    const latest = data[0];
    
    if (latest.voltage < 200) {
      alerts.push({
        type: 'warning',
        message: 'Low voltage detected! Please check your power supply.',
        icon: '⚠️'
      });
    }
    
    if (latest.power > 2000) {
      alerts.push({
        type: 'alert',
        message: 'High power consumption detected! Consider reducing load.',
        icon: '⚡'
      });
    }

    const avgPower = data.reduce((sum, r) => sum + r.power, 0) / data.length;
    if (avgPower > 1500) {
      alerts.push({
        type: 'info',
        message: 'Average power consumption is high. Check for energy-saving opportunities.',
        icon: 'ℹ️'
      });
    }

    setPowerAlerts(alerts);
  };

  // Calculate predictions
  const calculatePredictions = (data) => {
    const ratePerKWh = 5;
    const avgPower = data.reduce((sum, reading) => sum + reading.power, 0) / data.length;
    
    // Daily prediction (24 hours)
    const dailyKWh = (avgPower * 24) / 1000;
    const dailyBill = dailyKWh * ratePerKWh;
    
    // Weekly prediction
    const weeklyBill = dailyBill * 7;
    
    // Monthly prediction
    const monthlyBill = dailyBill * 30;

    setPredictionData({
      daily: dailyBill,
      weekly: weeklyBill,
      monthly: monthlyBill
    });
  };

  // Prepare chart data
  const getChartData = () => {
    const now = new Date();
    const oneDayAgo = new Date(now - 24 * 60 * 60 * 1000);
    const filteredReadings = readings.filter(r => new Date(r.timestamp) > oneDayAgo);

    return {
      labels: filteredReadings.map(r => new Date(r.timestamp).toLocaleTimeString()),
      datasets: [
        {
          label: 'Power (W)',
          data: filteredReadings.map(r => r.power),
          borderColor: '#00ff88',
          backgroundColor: 'rgba(0, 255, 136, 0.1)',
          tension: 0.4,
          fill: true,
        }
      ]
    };
  };

  // Prepare consumption distribution data
  const getConsumptionDistribution = () => {
    const totalPower = readings.reduce((sum, r) => sum + r.power, 0);
    const avgPower = totalPower / readings.length;
    const peakPower = Math.max(...readings.map(r => r.power));
    const basePower = Math.min(...readings.map(r => r.power));

    return {
      labels: ['Average', 'Peak', 'Base'],
      datasets: [{
        data: [avgPower, peakPower, basePower],
        backgroundColor: ['#00ff88', '#ff9e00', '#00b4d8'],
        borderColor: ['#00ff88', '#ff9e00', '#00b4d8'],
      }]
    };
  };

  // Prepare bill prediction data
  const getBillPredictionData = () => {
    return {
      labels: ['Daily', 'Weekly', 'Monthly'],
      datasets: [{
        label: 'Predicted Bill (₹)',
        data: [predictionData.daily, predictionData.weekly, predictionData.monthly],
        backgroundColor: ['#00ff88', '#00b4d8', '#ff9e00'],
      }]
    };
  };

  // Enhanced chart options with better styling
  const chartOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
        labels: {
          color: '#ffffff',
          font: {
            size: 12,
            family: "'Inter', sans-serif"
          },
          padding: 20
        }
      },
      title: {
        display: true,
        color: '#ffffff',
        font: {
          size: 16,
          weight: 'bold',
          family: "'Inter', sans-serif"
        },
        padding: {
          top: 10,
          bottom: 20
        }
      },
      tooltip: {
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
        titleFont: {
          size: 14,
          family: "'Inter', sans-serif"
        },
        bodyFont: {
          size: 13,
          family: "'Inter', sans-serif"
        },
        padding: 12,
        cornerRadius: 8,
        displayColors: true
      }
    },
    scales: {
      y: {
        beginAtZero: true,
        grid: {
          color: 'rgba(255, 255, 255, 0.1)',
          drawBorder: false
        },
        ticks: {
          color: '#ffffff',
          font: {
            family: "'Inter', sans-serif"
          },
          padding: 10
        }
      },
      x: {
        grid: {
          color: 'rgba(255, 255, 255, 0.1)',
          drawBorder: false
        },
        ticks: {
          color: '#ffffff',
          font: {
            family: "'Inter', sans-serif"
          },
          padding: 10
        }
      },
    },
    animation: {
      duration: 1000,
      easing: 'easeInOutQuart'
    },
    interaction: {
      intersect: false,
      mode: 'index'
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-[#0a0a0a] flex items-center justify-center">
        <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-[#00ff88]"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0a0a0a] to-[#1a1a1a] p-6">
      <br /><br /><br />
      <h1 className="text-5xl font-bold text-center mb-8 text-transparent bg-clip-text bg-gradient-to-r from-[#00ff88] via-[#00b4d8] to-[#ff9e00] animate-gradient">
        LumioFlow Energy Dashboard
      </h1>

      {/* Power Alerts */}
      {powerAlerts.length > 0 && (
        <div className="mb-8 space-y-3">
          {powerAlerts.map((alert, index) => (
            <div
              key={index}
              className={`p-4 rounded-xl backdrop-blur-md transform transition-all duration-300 hover:scale-[1.02] ${
                alert.type === 'warning'
                  ? 'bg-red-900/30 border-red-500'
                  : alert.type === 'alert'
                  ? 'bg-yellow-900/30 border-yellow-500'
                  : 'bg-blue-900/30 border-blue-500'
              } border-l-4 text-white shadow-lg`}
            >
              <div className="flex items-center">
                <span className="text-2xl mr-3 animate-pulse">{alert.icon}</span>
                <p className="font-semibold">{alert.message}</p>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Current Readings */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-gradient-to-br from-[#1a1a1a] to-[#2a2a2a] rounded-xl shadow-lg p-6 transform hover:scale-105 transition-all duration-300 border border-[#00ff88]/20 hover:border-[#00ff88]/40 hover:shadow-[#00ff88]/20">
          <h3 className="text-lg font-semibold text-[#00ff88] mb-2">Voltage</h3>
          <p className={`text-4xl font-bold ${isVoltageLow ? 'text-red-400' : 'text-[#00ff88]'}`}>
            {latestReading?.voltage?.toFixed(2) || '0.00'} V
          </p>
        </div>
        <div className="bg-gradient-to-br from-[#1a1a1a] to-[#2a2a2a] rounded-xl shadow-lg p-6 transform hover:scale-105 transition-all duration-300 border border-[#00b4d8]/20 hover:border-[#00b4d8]/40 hover:shadow-[#00b4d8]/20">
          <h3 className="text-lg font-semibold text-[#00b4d8] mb-2">Current</h3>
          <p className={`text-4xl font-bold ${isVoltageLow ? 'text-red-400' : 'text-[#00b4d8]'}`}>
            {latestReading?.current?.toFixed(2) || '0.00'} A
          </p>
        </div>
        <div className="bg-gradient-to-br from-[#1a1a1a] to-[#2a2a2a] rounded-xl shadow-lg p-6 transform hover:scale-105 transition-all duration-300 border border-[#ff9e00]/20 hover:border-[#ff9e00]/40 hover:shadow-[#ff9e00]/20">
          <h3 className="text-lg font-semibold text-[#ff9e00] mb-2">Power</h3>
          <p className={`text-4xl font-bold ${isVoltageLow ? 'text-red-400' : 'text-[#ff9e00]'}`}>
            {latestReading?.power?.toFixed(2) || '0.00'} W
          </p>
        </div>
      </div>

      {/* Bill Predictions */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-gradient-to-br from-[#1a1a1a] to-[#2a2a2a] rounded-xl shadow-lg p-6 transform hover:scale-105 transition-all duration-300 border border-[#00ff88]/20 hover:border-[#00ff88]/40 hover:shadow-[#00ff88]/20">
          <h3 className="text-lg font-semibold text-[#00ff88] mb-2">Daily Bill</h3>
          <p className="text-4xl font-bold text-[#00ff88]">
            ₹{predictionData.daily.toFixed(2)}
          </p>
          <p className="text-sm text-gray-400 mt-2">Based on current consumption</p>
        </div>
        <div className="bg-gradient-to-br from-[#1a1a1a] to-[#2a2a2a] rounded-xl shadow-lg p-6 transform hover:scale-105 transition-all duration-300 border border-[#00b4d8]/20 hover:border-[#00b4d8]/40 hover:shadow-[#00b4d8]/20">
          <h3 className="text-lg font-semibold text-[#00b4d8] mb-2">Weekly Bill</h3>
          <p className="text-4xl font-bold text-[#00b4d8]">
            ₹{predictionData.weekly.toFixed(2)}
          </p>
          <p className="text-sm text-gray-400 mt-2">7-day projection</p>
        </div>
        <div className="bg-gradient-to-br from-[#1a1a1a] to-[#2a2a2a] rounded-xl shadow-lg p-6 transform hover:scale-105 transition-all duration-300 border border-[#ff9e00]/20 hover:border-[#ff9e00]/40 hover:shadow-[#ff9e00]/20">
          <h3 className="text-lg font-semibold text-[#ff9e00] mb-2">Monthly Bill</h3>
          <p className="text-4xl font-bold text-[#ff9e00]">
            ₹{predictionData.monthly.toFixed(2)}
          </p>
          <p className="text-sm text-gray-400 mt-2">30-day projection</p>
        </div>
      </div>

      {/* Graphs Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div className="bg-gradient-to-br from-[#1a1a1a] to-[#2a2a2a] rounded-xl shadow-lg p-6 border border-white/10 transform hover:scale-[1.02] transition-all duration-300">
          <h2 className="text-xl font-semibold text-white mb-4">Power Consumption Over Time</h2>
          <div className="h-[300px]">
            <Line data={getChartData()} options={chartOptions} />
          </div>
        </div>

        <div className="bg-gradient-to-br from-[#1a1a1a] to-[#2a2a2a] rounded-xl shadow-lg p-6 border border-white/10 transform hover:scale-[1.02] transition-all duration-300">
          <h2 className="text-xl font-semibold text-white mb-4">Consumption Distribution</h2>
          <div className="h-[300px]">
            <Doughnut data={getConsumptionDistribution()} options={chartOptions} />
          </div>
        </div>

        <div className="bg-gradient-to-br from-[#1a1a1a] to-[#2a2a2a] rounded-xl shadow-lg p-6 border border-white/10 transform hover:scale-[1.02] transition-all duration-300 md:col-span-2">
          <h2 className="text-xl font-semibold text-white mb-4">Bill Predictions</h2>
          <div className="h-[300px]">
            <Bar data={getBillPredictionData()} options={chartOptions} />
          </div>
        </div>
      </div>

      {/* Energy Saving Tips */}
      <div className="mb-8">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[#00ff88] to-[#00b4d8]">
            Energy Saving Tips
          </h2>
          <button
            onClick={() => setShowTips(!showTips)}
            className="px-4 py-2 rounded-lg bg-gradient-to-r from-[#00ff88] to-[#00b4d8] text-black font-semibold hover:from-[#00b4d8] hover:to-[#00ff88] transition-all duration-300 transform hover:scale-105"
          >
            {showTips ? 'Hide Tips' : 'Show Tips'}
          </button>
        </div>
        {showTips && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {energyTips.map((tip, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-[#1a1a1a] to-[#2a2a2a] rounded-xl p-6 border border-white/10 hover:border-[#00ff88]/40 transition-all duration-300 transform hover:scale-105"
              >
                <div className="text-4xl mb-4 animate-bounce">{tip.icon}</div>
                <h3 className="text-xl font-semibold text-[#00ff88] mb-2">{tip.title}</h3>
                <p className="text-gray-400">{tip.description}</p>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Recent Readings Table */}
      <div className="mt-8 bg-gradient-to-br from-[#1a1a1a] to-[#2a2a2a] rounded-xl shadow-lg p-6 border border-white/10">
        <h2 className="text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[#00ff88] to-[#00b4d8] mb-4">
          Recent Readings
        </h2>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-700">
            <thead className="bg-[#2a2a2a]">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Time</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Voltage (V)</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Current (A)</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Power (W)</th>
              </tr>
            </thead>
            <tbody className="bg-[#1a1a1a] divide-y divide-gray-700">
              {readings.slice(0, 10).map((reading, index) => (
                <tr key={index} className="hover:bg-[#2a2a2a] transition-colors duration-200">
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">
                    {new Date(reading.timestamp).toLocaleString()}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-[#00ff88]">
                    {reading.voltage.toFixed(2)}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-[#00b4d8]">
                    {reading.current.toFixed(2)}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-[#ff9e00]">
                    {reading.power.toFixed(2)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
