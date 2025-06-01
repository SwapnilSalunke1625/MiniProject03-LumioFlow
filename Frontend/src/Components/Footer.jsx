import React from 'react'

export default function Footer() {
  return (
    <div>
    <footer className="bg-black text-white py-10 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex flex-col items-center md:items-start">
            <img src={logo} alt="Logo" className="w-24 h-auto mb-2" />
            <span className="text-lg font-semibold">Emporia Energy</span>
            <span className="text-sm text-gray-400 mt-1">Empowering your home, empowering your future.</span>
          </div>
          <div className="flex flex-col md:flex-row gap-8 text-center md:text-left">
            <div>
              <h3 className="font-bold mb-2">Products</h3>
              <ul className="space-y-1 text-gray-300">
                <li><Link to="/products" className="hover:text-green-400 transition">EV Charger</Link></li>
                <li><Link to="/products" className="hover:text-green-400 transition">Energy Monitor</Link></li>
                <li><Link to="/products" className="hover:text-green-400 transition">Smart Plug</Link></li>
                <li><Link to="/products" className="hover:text-green-400 transition">Home Battery</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-2">Company</h3>
              <ul className="space-y-1 text-gray-300">
                <li><Link to="/about" className="hover:text-green-400 transition">About Us</Link></li>
                <li><Link to="/careers" className="hover:text-green-400 transition">Careers</Link></li>
                <li><Link to="/blog" className="hover:text-green-400 transition">Blog</Link></li>
                <li><Link to="/contact" className="hover:text-green-400 transition">Contact</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-2">Support</h3>
              <ul className="space-y-1 text-gray-300">
                <li><Link to="/help-center" className="hover:text-green-400 transition">Help Center</Link></li>
                <li><Link to="/faqs" className="hover:text-green-400 transition">FAQs</Link></li>
                <li><Link to="/warranty" className="hover:text-green-400 transition">Warranty</Link></li>
                <li><Link to="/returns" className="hover:text-green-400 transition">Returns</Link></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="text-center text-gray-500 text-xs mt-8">
          &copy; {new Date().getFullYear()} Emporia Energy. All rights reserved.
        </div>
      </footer>
      
    </div>
  )
}
