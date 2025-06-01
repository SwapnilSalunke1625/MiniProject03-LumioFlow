import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import AdminSignUp from "./Pages/AdminSignUp"
import Login from "./Pages/Adminsignin"
import Home from "./Pages/Home"
import AdminDashboard from "./Pages/dashboard"
import Products from "./Pages/Products"
import EnergyManagement from "./Pages/EnergyManagement"
import Resources from "./Pages/Resources"
import About from "./Pages/About"
import Layout from './Components/Layout';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';



export default function App() {
  return (
    <BrowserRouter>
       <Navbar/>
      <Routes>      
        <Route path="/" element={<Home />} />        
        <Route path="/signin" element={<Login />} />
        <Route path="/signup" element={<AdminSignUp />} />
        <Route path="/dashboard" element={<AdminDashboard />} />
        <Route path="/products" element={<Products />} />
        <Route path="/energy-management" element={<EnergyManagement />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/about" element={<About />} />        
      </Routes>
      <Footer/>
    </BrowserRouter>
  )
}


