import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export default function AdminSignUp() {

  
  
  return (
    <>
      <div className="flex justify-center items-center min-h-screen w-screen bg-gray-100">
        <div className="bg-gray-200 w-[430px] h-[570px] rounded-xl shadow-lg ">
          <h2 className="text-4xl font-bold text-center my-4">Sign Up</h2>
          <form className="flex justify-center items-center flex-col gap-3">

            <input
              type="text"
           
              placeholder="Full Name"
              className="input-box w-[320px] h-[40px] bg-white rounded-xl outline-none px-4 text-lg "
           
              required
            />

            <input
              type="email"
            
              placeholder="Email"
              className="input-box w-[320px] h-[40px] bg-white rounded-xl outline-none px-4 text-lg"
              
              required
            />

            <input
              type="tel"
             
              placeholder="Phone Number"
              className="input-box w-[320px] h-[40px] bg-white rounded-xl outline-none px-4 text-lg"
              
              required
            />

            <div className=" flex gap-2 ">
              <input
                type="text"
           
                placeholder="Country"
                className="input-box h-[40px] w-[100px] bg-white rounded-l-xl rounded-r-md outline-none px-4 text-lg"
                
                required
              />
              <input
                type="text"
              
                placeholder="State"
                className="input-box h-[40px] w-[100px] bg-white rounded-md outline-none px-4 text-lg"
         
                required
              />
              <input
                type="text"
             
                placeholder="City"
                className="input-box h-[40px] w-[100px] bg-white rounded-r-xl rounded-l-md  outline-none px-4 text-lg"
                
                required
              />
            </div>

            <select
              
              className="input-box w-[320px] h-[40px] bg-white rounded-xl outline-none px-4 text-lg"
             
              required
            >
              <option value="">Select User Type</option>
              <option value="Residential">Residential</option>
              <option value="Commercial">Commercial</option>
              <option value="Industrial">Industrial</option>
            </select>

            <input
              type="password"
              
              placeholder="Password"
              className="input-box w-[320px] h-[40px] bg-white rounded-xl outline-none px-4 text-lg"
              
            />

            <input
              type="password"
              
              placeholder="Confirm Password"
              className="input-box w-[320px] h-[40px] bg-white rounded-xl outline-none px-4 text-lg"
              
              required
            />
            
            <p className="text-center text-gray-600 font-semibold">
              Preferred Notification:
              <label className="ml-2">
                <input type="checkbox" className="mr-1" /> WhatsApp
              </label>
              <label className="ml-2">
                <input type="checkbox" className="mr-1" /> Email
              </label>
            </p>
            <button
              type="button"
              className="w-[150px] py-2 px-4 font-bold outline-none  rounded-lg "
            >
              Sign Up
            </button>
            <p className="text-center text-gray-600 ">
              Already have an account?{" "}
              <Link to="/signin" className="text-blue-600 hover:underline">
                Log in
              </Link>
            </p>
          </form>
        </div>
      </div>
    </>
  );
}