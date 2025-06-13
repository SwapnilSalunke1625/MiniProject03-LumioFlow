import React, { useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import axios from 'axios';
import { FaBolt, FaTachometerAlt, FaMoneyBillWave, FaPlug, FaChartLine } from 'react-icons/fa';

// Register ChartJS components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const Dashboard = () => {
  const [readings, setReadings] = useState([]);
  const [latestReading, setLatestReading] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isVoltageLow, setIsVoltageLow] = useState(false);

  const ratePerKWh = 5; // ₹5 per kWh

  const fetchReadings = async () => {
    try {
      const response = await axios.get('http://192.168.235.50:8000/api/power?limit=1000');
      setReadings(response.data);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching readings:', error);
      setLoading(false);
    }
  };

  const fetchLatestReading = async () => {
    try {
      const response = await axios.get('http://192.168.235.50:8000/api/power/latest');
      setLatestReading(response.data);
      setIsVoltageLow(response.data?.voltage < 200);
    } catch (error) {
      console.error('Error fetching latest reading:', error);
    }
  };

  useEffect(() => {
    fetchReadings();
    fetchLatestReading();
    const interval = setInterval(fetchLatestReading, 1000);
    return () => clearInterval(interval);
  }, []);

  // Bill prediction calculation (for current month)
  const now = new Date();
  const readingsThisMonth = readings.filter(r => {
    const t = new Date(r.timestamp);
    return t.getMonth() === now.getMonth() && t.getFullYear() === now.getFullYear() && r.voltage >= 200;
  });
  // Each reading is 1 second apart
  const totalWh = readingsThisMonth.reduce((sum, r) => sum + (r.power / 3600), 0); // Wh
  const totalKWh = totalWh / 1000;
  const bill = totalKWh * ratePerKWh;

  const chartData = {
    labels: readings.map(r => new Date(r.timestamp).toLocaleTimeString()),
    datasets: [
      {
        label: 'Voltage (V)',
        data: readings.map(r => r.voltage),
        borderColor: 'rgb(75, 192, 192)',
        backgroundColor: 'rgba(75, 192, 192, 0.1)',
        tension: 0.1,
        fill: true,
      },
      {
        label: 'Current (A)',
        data: readings.map(r => r.current),
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 0.1)',
        tension: 0.1,
        fill: true,
      },
      {
        label: 'Power (W)',
        data: readings.map(r => r.power),
        borderColor: 'rgb(54, 162, 235)',
        backgroundColor: 'rgba(54, 162, 235, 0.1)',
        tension: 0.1,
        fill: true,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Power Monitoring Dashboard',
      },
    },
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-green-500"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
      <div className="container mx-auto px-4 py-8">
        {/* Beautiful Heading */}
        <h1 className="text-3xl md:text-4xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-green-500 via-blue-500 to-purple-500 mb-8 drop-shadow-lg">
          ⚡ LumioFlow Energy Dashboard
        </h1>
        {/* Warning Banner */}
        {isVoltageLow && (
          <div className="mb-6 p-4 bg-red-100 border border-red-400 text-red-700 rounded-lg shadow">
            <p className="font-semibold flex items-center gap-2"><FaBolt className="inline" /> Voltage is below 200V</p>
            <p>All readings are set to 0 for safety.</p>
          </div>
        )}

        {/* Summary Bar */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-8">
          <div className="flex items-center gap-3 bg-gradient-to-br from-green-200 to-green-400 rounded-xl p-4 shadow hover:scale-105 transition-transform">
            <FaPlug className="text-3xl text-green-700" />
            <div>
              <div className="text-xs text-green-900 font-semibold">Voltage</div>
              <div className="text-lg font-bold text-green-900">{latestReading?.voltage?.toFixed(2) || '0.00'} V</div>
            </div>
          </div>
          <div className="flex items-center gap-3 bg-gradient-to-br from-blue-200 to-blue-400 rounded-xl p-4 shadow hover:scale-105 transition-transform">
            <FaTachometerAlt className="text-3xl text-blue-700" />
            <div>
              <div className="text-xs text-blue-900 font-semibold">Current</div>
              <div className="text-lg font-bold text-blue-900">{latestReading?.current?.toFixed(2) || '0.00'} A</div>
            </div>
          </div>
          <div className="flex items-center gap-3 bg-gradient-to-br from-purple-200 to-purple-400 rounded-xl p-4 shadow hover:scale-105 transition-transform">
            <FaChartLine className="text-3xl text-purple-700" />
            <div>
              <div className="text-xs text-purple-900 font-semibold">Power</div>
              <div className="text-lg font-bold text-purple-900">{latestReading?.power?.toFixed(2) || '0.00'} W</div>
            </div>
          </div>
          <div className="flex items-center gap-3 bg-gradient-to-br from-yellow-200 to-yellow-400 rounded-xl p-4 shadow hover:scale-105 transition-transform">
            <FaBolt className="text-3xl text-yellow-700" />
            <div>
              <div className="text-xs text-yellow-900 font-semibold">Consumed Units</div>
              <div className="text-lg font-bold text-yellow-900">{totalKWh.toFixed(2)} kWh</div>
            </div>
          </div>
          <div className="flex items-center gap-3 bg-gradient-to-br from-orange-200 to-orange-400 rounded-xl p-4 shadow hover:scale-105 transition-transform">
            <FaMoneyBillWave className="text-3xl text-orange-700" />
            <div>
              <div className="text-xs text-orange-900 font-semibold">Predicted Bill</div>
              <div className="text-lg font-bold text-orange-900">₹{bill.toFixed(2)}</div>
            </div>
          </div>
        </div>

        {/* Chart Section */}
        <div className="bg-gradient-to-br from-white via-blue-50 to-blue-100 rounded-2xl shadow-2xl p-8 border border-blue-200 mb-8">
          <h2 className="text-xl font-bold text-blue-800 mb-4 flex items-center gap-2"><FaChartLine /> Power, Voltage & Current Trends</h2>
          <div className="h-[350px]">
            <Line data={chartData} options={chartOptions} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
