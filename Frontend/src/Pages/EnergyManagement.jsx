import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaBolt, FaLightbulb, FaFan, FaTv, FaPlug } from 'react-icons/fa';

const EnergyManagement = () => {
  const [devices, setDevices] = useState([
    { id: 1, name: "Living Room Lights", power: 120, icon: <FaLightbulb />, status: true },
    { id: 2, name: "Kitchen Appliances", power: 450, icon: <FaPlug />, status: true },
    { id: 3, name: "HVAC System", power: 800, icon: <FaFan />, status: false },
    { id: 4, name: "Entertainment System", power: 200, icon: <FaTv />, status: true }
  ]);

  const toggleDevice = (id) => {
    setDevices(devices.map(device => 
      device.id === id ? { ...device, status: !device.status } : device
    ));
  };

  // Calculate total power based on active devices
  const totalPower = devices.reduce((sum, device) => 
    device.status ? sum + device.power : sum, 0
  );

  return (
    <div className="min-h-screen bg-black text-white p-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >

          <br /><br />
          <h1 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500">
            Energy Management
          </h1>
          <p className="text-gray-400">
            Control your devices and monitor power consumption
          </p>
        </motion.div>

        {/* Current Power Display */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-8 border border-green-500/20 mb-12 text-center"
        >
          <div className="flex items-center justify-center space-x-4 mb-4">
            <FaBolt className="text-4xl text-green-500" />
            <h2 className="text-2xl font-semibold">Total Power Usage</h2>
          </div>
          <p className="text-5xl font-bold text-green-500">{totalPower} W</p>
        </motion.div>

        {/* Device Control Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="space-y-6"
        >
          <h2 className="text-2xl font-bold mb-6 text-center">Device Control</h2>
          {devices.map((device) => (
            <motion.div
              key={device.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-6 border border-green-500/20 hover:border-green-500/50 transition-all duration-300"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <div className="text-3xl text-green-500">{device.icon}</div>
                  <div>
                    <h3 className="text-xl font-semibold">{device.name}</h3>
                    <p className="text-gray-400">Power: {device.power}W</p>
                  </div>
                </div>
                <button 
                  onClick={() => toggleDevice(device.id)}
                  className={`px-6 py-3 rounded-lg transition-all duration-300 ${
                    device.status 
                      ? 'bg-green-500 hover:bg-green-600' 
                      : 'bg-gray-600 hover:bg-gray-700'
                  } text-white font-semibold`}
                >
                  {device.status ? 'ON' : 'OFF'}
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Quick Tips */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-12 bg-gray-900/50 backdrop-blur-sm rounded-xl p-6 border border-green-500/20"
        >
          <h2 className="text-xl font-bold mb-4 text-center">Quick Tips</h2>
          <ul className="space-y-3 text-gray-300">
            <li className="flex items-center space-x-2">
              <span className="text-green-500">•</span>
              <span>Turn off devices when not in use to save energy</span>
            </li>
            <li className="flex items-center space-x-2">
              <span className="text-green-500">•</span>
              <span>Use energy-efficient settings for optimal consumption</span>
            </li>
            <li className="flex items-center space-x-2">
              <span className="text-green-500">•</span>
              <span>Monitor power usage to identify energy-hungry devices</span>
            </li>
          </ul>
        </motion.div>
      </div>
    </div>
  );
};

export default EnergyManagement; 