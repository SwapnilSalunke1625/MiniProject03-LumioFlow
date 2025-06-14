import React from 'react';

const BillView = ({ user, readings, latestReading }) => {
  // Calculate total consumption
  const totalKWh = readings.reduce((sum, reading) => {
    const hours = 1; // Assuming readings are taken every hour
    const kWh = (reading.power * hours) / 1000;
    return sum + kWh;
  }, 0);

  // Calculate bill amount (₹5 per kWh)
  const ratePerKWh = 5;
  const billAmount = totalKWh * ratePerKWh;

  // Format date
  const currentDate = new Date().toLocaleDateString('en-IN', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  // Generate bill number
  const billNumber = `BILL${Date.now().toString().slice(-8)}`;

  return (
    <div className="bg-white p-8 rounded-lg shadow-2xl max-w-2xl mx-auto my-8 border-2 border-gray-200">
      {/* Header */}
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-blue-800">LumioFlow Energy</h1>
        <p className="text-gray-600">Electricity Bill</p>
      </div>

      {/* Bill Details */}
      <div className="grid grid-cols-2 gap-8 mb-8">
        <div>
          <h2 className="text-lg font-semibold text-gray-800 mb-2">Bill Details</h2>
          <p className="text-gray-600">Bill Number: {billNumber}</p>
          <p className="text-gray-600">Date: {currentDate}</p>
          <p className="text-gray-600">Due Date: {new Date(Date.now() + 15 * 24 * 60 * 60 * 1000).toLocaleDateString('en-IN')}</p>
        </div>
        <div>
          <h2 className="text-lg font-semibold text-gray-800 mb-2">Customer Details</h2>
          <p className="text-gray-600">Name: {user?.name || 'Guest User'}</p>
          <p className="text-gray-600">Email: {user?.email || 'guest@example.com'}</p>
          <p className="text-gray-600">Address: {user?.address || '123 Energy Street, Power City'}</p>
        </div>
      </div>

      {/* Consumption Details */}
      <div className="mb-8">
        <h2 className="text-lg font-semibold text-gray-800 mb-4">Consumption Details</h2>
        <div className="bg-gray-50 p-4 rounded-lg">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="text-gray-600">Total Units Consumed</p>
              <p className="text-2xl font-bold text-blue-800">{totalKWh.toFixed(2)} kWh</p>
            </div>
            <div>
              <p className="text-gray-600">Rate per Unit</p>
              <p className="text-2xl font-bold text-blue-800">₹{ratePerKWh.toFixed(2)}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Current Reading */}
      <div className="mb-8">
        <h2 className="text-lg font-semibold text-gray-800 mb-4">Current Reading</h2>
        <div className="grid grid-cols-3 gap-4">
          <div className="bg-gray-50 p-4 rounded-lg text-center">
            <p className="text-gray-600">Voltage</p>
            <p className="text-xl font-bold text-blue-800">{latestReading?.voltage?.toFixed(2) || '0.00'} V</p>
          </div>
          <div className="bg-gray-50 p-4 rounded-lg text-center">
            <p className="text-gray-600">Current</p>
            <p className="text-xl font-bold text-blue-800">{latestReading?.current?.toFixed(2) || '0.00'} A</p>
          </div>
          <div className="bg-gray-50 p-4 rounded-lg text-center">
            <p className="text-gray-600">Power</p>
            <p className="text-xl font-bold text-blue-800">{latestReading?.power?.toFixed(2) || '0.00'} W</p>
          </div>
        </div>
      </div>

      {/* Bill Amount */}
      <div className="bg-blue-50 p-6 rounded-lg mb-8">
        <div className="flex justify-between items-center">
          <div>
            <p className="text-gray-600">Total Amount</p>
            <p className="text-3xl font-bold text-blue-800">₹{billAmount.toFixed(2)}</p>
          </div>
          <div className="text-right">
            <p className="text-gray-600">Status</p>
            <p className="text-green-600 font-semibold">Pending</p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="text-center text-gray-600 text-sm">
        <p>Thank you for choosing LumioFlow Energy</p>
        <p>For any queries, please contact our customer support</p>
        <p className="mt-2">This is a computer-generated bill, no signature required</p>
      </div>
    </div>
  );
};

export default BillView; 