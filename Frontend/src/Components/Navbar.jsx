import React, { useState } from "react";
import logo from "./../assets/icons/logo.png"; // Ensure the path is correct
import { Link } from "react-router-dom";

export default function Navbar() {

  
  return (
    <div className="flex justify-between w-full h-20 bg-gray-400 px-10 shadow-md sticky top-0 z-50">
      {/* Left: Logo */}

      <div className="flex items-center h-full ">
        <img src={logo} alt="Logo" className="h-20 " />
      </div>

      {/* right section */}


      

      <div className="">
        {/* Center: Navigation Links */}
        <ul className="flex gap-10 font-medium text-lg h-full items-center justify-center">
          <li>
            <a
              href="#home"
              className="hover:text-cyan-400 transition-colors duration-200"
            >
              {" "}
              Home
            </a>
          </li>

          <li>
            <a
              href="#service-guide"
              className="hover:text-cyan-400 transition-colors duration-200"
            >
              Service Guide
            </a>
          </li>
          <li>
            <a
              href="#about"
              className="hover:text-cyan-400 transition-colors duration-200"
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="hover:text-cyan-400 transition-colors duration-200"
            >
              Contact
            </a>
          </li>

          <button
            className="text-xl hover:text-yellow-300 transition-colors duration-200"
            aria-label="Toggle Theme"
          >
            🌓
          </button>

          <Link to="/signin">
            <button className=" h-[45px] w-[120px] rounded-2xl bg-yellow-400 text-lg font-bold transition-colors duration-200">
              Login
            </button>
          </Link>
        </ul>
      </div>
    </div>
  );
}
