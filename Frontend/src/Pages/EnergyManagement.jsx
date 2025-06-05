import React from 'react';
import { Link } from 'react-router-dom';
import logo from "./../assets/icons/logo.png";
import energyVisual from "./../assets/icons/energy-circle.png";

const EnergyManagement = () => {
  const features = [
    {
      title: "Real-time Monitoring",
      description: "Track your energy usage in real-time with detailed insights and analytics.",
      icon: "📊"
    },
    {
      title: "Smart Automation",
      description: "Automate your home's energy usage based on your preferences and schedule.",
      icon: "🤖"
    },
    {
      title: "Cost Savings",
      description: "Reduce your energy bills with intelligent optimization and usage patterns.",
      icon: "💰"
    },
    {
      title: "Environmental Impact",
      description: "Monitor and reduce your carbon footprint with sustainable energy practices.",
      icon: "🌱"
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white">


      {/* Main Content */}
      <main className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Home Energy Management</h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Take control of your home's energy usage with our comprehensive management solution.
              Monitor, optimize, and save on your energy consumption.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {features.map((feature, index) => (
              <div key={index} className="bg-gray-900 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-2xl font-bold mb-2">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>

          {/* How It Works */}
          <div className="bg-gray-900 rounded-xl p-8 shadow-lg mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center">How It Works</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-4xl mb-4">1</div>
                <h3 className="text-xl font-bold mb-2">Install</h3>
                <p className="text-gray-300">Easy installation of our energy monitoring devices</p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-4">2</div>
                <h3 className="text-xl font-bold mb-2">Monitor</h3>
                <p className="text-gray-300">Track your energy usage in real-time</p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-4">3</div>
                <h3 className="text-xl font-bold mb-2">Optimize</h3>
                <p className="text-gray-300">Automatically optimize your energy consumption</p>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Get Started?</h2>
            <p className="text-xl text-gray-300 mb-8">
              Join thousands of homeowners who are already saving on their energy bills.
            </p>
            <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-8 rounded-full shadow-lg transition-all duration-300">
              Get Started Now
            </button>
          </div>
        </div>
      </main>

      {/* Footer */}
      
    </div>
  );
};

export default EnergyManagement; 