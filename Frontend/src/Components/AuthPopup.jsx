import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaTimes, FaEnvelope, FaLock, FaUser, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import logo from '../assets/icons/logo.png';

const AuthPopup = ({ isOpen, onClose }) => {
  const [isSignIn, setIsSignIn] = useState(true);
  const navigate = useNavigate();

  // Sign In State
  const [signInData, setSignInData] = useState({
    email: '',
    password: ''
  });

  // Sign Up State
  const [signUpData, setSignUpData] = useState({
    fullName: '',
    email: '',
    phone: '',
    country: '',
    state: '',
    city: '',
    userType: '',
    password: '',
    confirmPassword: '',
    preferredNotification: {
      whatsappnotify: false,
      emailnotify: false,
    }
  });

  const handleSignInChange = (e) => {
    setSignInData({
      ...signInData,
      [e.target.name]: e.target.value
    });
  };

  const handleSignUpChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (name === "whatsappnotify" || name === "emailnotify") {
      setSignUpData(prev => ({
        ...prev,
        preferredNotification: {
          ...prev.preferredNotification,
          [name]: checked,
        },
      }));
    } else {
      setSignUpData(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleSignIn = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("/api/v1/users/signin", {
        email: signInData.email,
        password: signInData.password,
      });
      console.log(response)
      const { token, user } = response.data.data;
      localStorage.setItem("token", response.data.data.accessToken);
      localStorage.setItem("user", JSON.stringify(user));
      
      // Dispatch a custom event to notify about login
      window.dispatchEvent(new Event('userLogin'));
      
      onClose();
      navigate("/");
    } catch (error) {
      alert(error.response?.data?.message || "Login failed");
    }
  };

  const handleSignUp = async (e) => {
    e.preventDefault();

    if (signUpData.password !== signUpData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    const selectedNotifications = [];
    if (signUpData.preferredNotification.whatsappnotify) {
      selectedNotifications.push("whatsapp");
    }
    if (signUpData.preferredNotification.emailnotify) {
      selectedNotifications.push("email");
    }

    try {
      const dataToSend = {
        ...signUpData,
        preferredNotification: selectedNotifications,
        signupDate: new Date().toISOString(),
      };

      const res = await axios.post("/api/v1/users/signup", dataToSend);
      console.log("Signup Success:", res.data);
      
      setIsSignIn(true);
      setSignUpData({
        fullName: '',
        email: '',
        phone: '',
        country: '',
        state: '',
        city: '',
        userType: '',
        password: '',
        confirmPassword: '',
        preferredNotification: {
          whatsappnotify: false,
          emailnotify: false,
        }
      });
    } catch (err) {
      console.error("Signup Error:", err.response?.data || err.message);
      alert("Signup failed. Please try again.");
    }
  };

  const toggleMode = () => {
    setIsSignIn(!isSignIn);
    setSignInData({ email: '', password: '' });
    setSignUpData({
      fullName: '',
      email: '',
      phone: '',
      country: '',
      state: '',
      city: '',
      userType: '',
      password: '',
      confirmPassword: '',
      preferredNotification: {
        whatsappnotify: false,
        emailnotify: false,
      }
    });
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          className="bg-gray-200 rounded-2xl p-8 w-full max-w-md relative"
          onClick={e => e.stopPropagation()}
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-gray-600 hover:text-gray-800 transition-colors"
          >
            <FaTimes className="text-xl" />
          </button>

          {/* Logo */}
          <div className="flex justify-center mb-4">
            <img src={logo} alt="Logo" className="w-14 h-14 object-contain" />
          </div>

          {/* Header */}
          <div className="text-center mb-4">
            <h2 className="text-2xl font-bold text-gray-800">
              {isSignIn ? 'Welcome Back' : 'Create Account'}
            </h2>
            <p className="text-gray-600 mt-1 text-sm">
              {isSignIn ? 'Sign in to your account' : 'Join our community'}
            </p>
          </div>

          {/* Form */}
          {isSignIn ? (
            <form onSubmit={handleSignIn} className="space-y-3">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <FaEnvelope className="text-gray-500 text-sm" />
                  </div>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={signInData.email}
                    onChange={handleSignInChange}
                    required
                    className="w-full pl-8 pr-3 py-2 text-sm bg-white rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                  Password
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <FaLock className="text-gray-500 text-sm" />
                  </div>
                  <input
                    type="password"
                    id="password"
                    name="password"
                    value={signInData.password}
                    onChange={handleSignInChange}
                    required
                    className="w-full pl-8 pr-3 py-2 text-sm bg-white rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
                    placeholder="••••••••"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors text-sm"
              >
                Sign In
              </button>
            </form>
          ) : (
            <form onSubmit={handleSignUp} className="space-y-3 max-h-[65vh] overflow-y-auto pr-2">
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label htmlFor="fullName" className="block text-sm font-medium text-gray-700">
                    Full Name
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <FaUser className="text-gray-500 text-sm" />
                    </div>
                    <input
                      type="text"
                      id="fullName"
                      name="fullName"
                      value={signUpData.fullName}
                      onChange={handleSignUpChange}
                      required
                      className="w-full pl-8 pr-3 py-2 text-sm bg-white rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
                      placeholder="John Doe"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                    Email
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <FaEnvelope className="text-gray-500 text-sm" />
                    </div>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={signUpData.email}
                      onChange={handleSignUpChange}
                      required
                      className="w-full pl-8 pr-3 py-2 text-sm bg-white rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                    Phone Number
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <FaPhone className="text-gray-500 text-sm" />
                    </div>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={signUpData.phone}
                      onChange={handleSignUpChange}
                      required
                      className="w-full pl-8 pr-3 py-2 text-sm bg-white rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
                      placeholder="+1234567890"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="userType" className="block text-sm font-medium text-gray-700">
                    User Type
                  </label>
                  <select
                    id="userType"
                    name="userType"
                    value={signUpData.userType}
                    onChange={handleSignUpChange}
                    required
                    className="w-full px-3 py-2 text-sm bg-white rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
                  >
                    <option value="">Select Type</option>
                    <option value="Residential">Residential</option>
                    <option value="Commercial">Commercial</option>
                    <option value="Industrial">Industrial</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-3">
                <div>
                  <input
                    type="text"
                    name="country"
                    value={signUpData.country}
                    onChange={handleSignUpChange}
                    placeholder="Country"
                    required
                    className="w-full px-3 py-2 text-sm bg-white rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
                  />
                </div>
                <div>
                  <input
                    type="text"
                    name="state"
                    value={signUpData.state}
                    onChange={handleSignUpChange}
                    placeholder="State"
                    required
                    className="w-full px-3 py-2 text-sm bg-white rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
                  />
                </div>
                <div>
                  <input
                    type="text"
                    name="city"
                    value={signUpData.city}
                    onChange={handleSignUpChange}
                    placeholder="City"
                    required
                    className="w-full px-3 py-2 text-sm bg-white rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                    Password
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <FaLock className="text-gray-500 text-sm" />
                    </div>
                    <input
                      type="password"
                      id="password"
                      name="password"
                      value={signUpData.password}
                      onChange={handleSignUpChange}
                      required
                      className="w-full pl-8 pr-3 py-2 text-sm bg-white rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
                      placeholder="••••••••"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">
                    Confirm Password
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <FaLock className="text-gray-500 text-sm" />
                    </div>
                    <input
                      type="password"
                      id="confirmPassword"
                      name="confirmPassword"
                      value={signUpData.confirmPassword}
                      onChange={handleSignUpChange}
                      required
                      className="w-full pl-8 pr-3 py-2 text-sm bg-white rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
                      placeholder="••••••••"
                    />
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-center space-x-4 text-sm">
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    name="whatsappnotify"
                    checked={signUpData.preferredNotification.whatsappnotify}
                    onChange={handleSignUpChange}
                    className="mr-2 w-4 h-4"
                  />
                  <span className="text-gray-700">WhatsApp</span>
                </label>
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    name="emailnotify"
                    checked={signUpData.preferredNotification.emailnotify}
                    onChange={handleSignUpChange}
                    className="mr-2 w-4 h-4"
                  />
                  <span className="text-gray-700">Email</span>
                </label>
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors text-sm"
              >
                Sign Up
              </button>
            </form>
          )}

          {/* Toggle Mode */}
          <div className="mt-4 text-center">
            <p className="text-sm text-gray-600">
              {isSignIn ? "Don't have an account?" : "Already have an account?"}
              <button
                onClick={toggleMode}
                className="ml-2 text-blue-600 hover:text-blue-700 transition-colors"
              >
                {isSignIn ? 'Sign Up' : 'Sign In'}
              </button>
            </p>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default AuthPopup; 