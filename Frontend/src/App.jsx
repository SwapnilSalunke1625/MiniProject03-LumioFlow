import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from "./Pages/Home"
import AdminDashboard from "./Pages/dashboard"
import Products from "./Pages/Products"
import EnergyManagement from "./Pages/EnergyManagement"
import Resources from "./Pages/Resources"
import About from "./Pages/About"
import Contact from "./Pages/Contact"
import Layout from './Components/Layout';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import LoadingSpinner from './Components/LoadingSpinner'
import AdminSignIn  from './Pages/AdminSignIn';
import AdminSignUp from './Pages/AdminSignUp';
import Dashboard from './Pages/dashboard';
import ChatWidget from './Components/ChatWidget';

// Error Boundary Component
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error('Error:', error);
    console.error('Error Info:', errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-black text-white flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-3xl font-bold mb-4">Something went wrong</h1>
            <p className="text-gray-400 mb-6">Please try refreshing the page</p>
            <button
              onClick={() => window.location.reload()}
              className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-6 rounded-lg transition-all duration-300"
            >
              Refresh Page
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default function App() {
  return (
    <ErrorBoundary>
      <BrowserRouter>
        <Navbar/>
        <LoadingSpinner/>

        <Routes>      
          <Route path="/" element={<Home />} />        
          <Route path="/signin" element={<AdminSignIn />} />
          <Route path="/signup" element={<AdminSignUp />} />
          <Route path="/dashboard" element={<AdminDashboard />} />
          <Route path="/products" element={<Products />} />
          <Route path="/energy-management" element={<Dashboard />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer/>
        <ChatWidget />
      </BrowserRouter>
    </ErrorBoundary>
  )
}


