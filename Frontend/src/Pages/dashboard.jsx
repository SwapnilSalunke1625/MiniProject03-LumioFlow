import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
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
  const [currentPower, setCurrentPower] = useState(0);
  const [voltage, setVoltage] = useState(0);
  const [current, setCurrent] = useState(0);
  const [powerFactor, setPowerFactor] = useState(0);
  const [dailyConsumption, setDailyConsumption] = useState(0);

  // Simulated data for the chart
  const chartData = {
    labels: Array.from({ length: 24 }, (_, i) => `${i}:00`),
    datasets: [
      {
        label: 'Power Consumption (kW)',
        data: Array.from({ length: 24 }, () => Math.random() * 2 + 0.5),
        borderColor: 'rgb(34, 197, 94)',
        backgroundColor: 'rgba(34, 197, 94, 0.1)',
        tension: 0.4,
        fill: true,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
        labels: {
          color: 'white',
        },
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        grid: {
          color: 'rgba(255, 255, 255, 0.1)',
        },
        ticks: {
          color: 'white',
        },
      },
      x: {
        grid: {
          color: 'rgba(255, 255, 255, 0.1)',
        },
        ticks: {
          color: 'white',
        },
      },
    },
  };

  // Simulate real-time updates
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPower(Math.random() * 2 + 0.5);
      setVoltage(220 + Math.random() * 10 - 5);
      setCurrent(Math.random() * 10);
      setPowerFactor(0.85 + Math.random() * 0.1);
      setDailyConsumption(prev => prev + Math.random() * 0.1);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  const stats = [
    {
      title: "Current Power",
      value: `${currentPower.toFixed(2)} kW`,
      icon: "⚡",
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Voltage",
      value: `${voltage.toFixed(1)} V`,
      icon: "🔌",
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Current",
      value: `${current.toFixed(2)} A`,
      icon: "📊",
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Power Factor",
      value: powerFactor.toFixed(2),
      icon: "📈",
      color: "from-yellow-500 to-orange-500"
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white p-6">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-8"
      >
        <h1 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500">
          Energy Dashboard
        </h1>
        <p className="text-gray-400">Real-time monitoring of your power consumption</p>
      </motion.div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className={`bg-gradient-to-br ${stat.color} rounded-xl p-6 shadow-lg`}
          >
            <div className="text-3xl mb-2">{stat.icon}</div>
            <h3 className="text-lg font-semibold mb-1">{stat.title}</h3>
            <p className="text-2xl font-bold">{stat.value}</p>
          </motion.div>
        ))}
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Power Consumption Chart */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="lg:col-span-2 bg-gray-900/50 backdrop-blur-sm rounded-xl p-6 border border-green-500/20"
        >
          <h2 className="text-xl font-bold mb-4">24-Hour Power Consumption</h2>
          <div className="h-[400px]">
            <Line data={chartData} options={chartOptions} />
          </div>
        </motion.div>

        {/* Daily Summary */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-6 border border-green-500/20"
        >
          <h2 className="text-xl font-bold mb-4">Daily Summary</h2>
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-gray-400">Total Consumption</span>
              <span className="text-xl font-bold">{dailyConsumption.toFixed(2)} kWh</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-400">Peak Power</span>
              <span className="text-xl font-bold">2.5 kW</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-400">Average Power</span>
              <span className="text-xl font-bold">1.2 kW</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-400">Cost Estimate</span>
              <span className="text-xl font-bold">${(dailyConsumption * 0.12).toFixed(2)}</span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Recent Alerts */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mt-8 bg-gray-900/50 backdrop-blur-sm rounded-xl p-6 border border-green-500/20"
      >
        <h2 className="text-xl font-bold mb-4">Recent Alerts</h2>
        <div className="space-y-4">
          <div className="flex items-center gap-4 p-4 bg-red-500/10 rounded-lg border border-red-500/20">
            <span className="text-2xl">⚠️</span>
            <div>
              <h3 className="font-semibold">High Power Consumption</h3>
              <p className="text-gray-400">Power consumption exceeded normal threshold at 14:30</p>
            </div>
          </div>
          <div className="flex items-center gap-4 p-4 bg-yellow-500/10 rounded-lg border border-yellow-500/20">
            <span className="text-2xl">⚡</span>
            <div>
              <h3 className="font-semibold">Voltage Fluctuation</h3>
              <p className="text-gray-400">Voltage dropped below normal range at 15:45</p>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Dashboard;
