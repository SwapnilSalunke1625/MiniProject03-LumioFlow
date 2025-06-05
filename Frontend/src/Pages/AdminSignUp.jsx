import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function AdminSignUp() {
  // rounting purpose
  const navigate = useNavigate();

  // usestate hook for taking data
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    country: "",
    state: "",
    city: "",
    userType: "",
    password: "",
    confirmPassword: "",
    preferredNotification: {
      whatsappnotify: false,
      emailnotify: false,
    },
  });

  // handling changes while taking inputs
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (name === "whatsappnotify" || name === "emailnotify") {
      setFormData((prev) => ({
        ...prev,
        preferredNotification: {
          ...prev.preferredNotification,
          [name]: checked,
        },
      }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  // handling submit form
 const handleSubmit = async (e) => {
  e.preventDefault();

  if (formData.password !== formData.confirmPassword) {
    alert("Passwords do not match!");
    return;
  }

  // Convert preferredNotification object to array
  const selectedNotifications = [];
  if (formData.preferredNotification.whatsappnotify) {
    selectedNotifications.push("whatsapp");
  }
  if (formData.preferredNotification.emailnotify) {
    selectedNotifications.push("email");
  }

  try {
    const dataToSend = {
      ...formData,
      preferredNotification: selectedNotifications, // ✅ this is now an array of strings
      signupDate: new Date().toISOString(),
    };

    const res = await axios.post("/api/v1/users/signup", dataToSend);
    console.log("Signup Success:", res.data);

    navigate("/signin");

    setFormData({
      fullName: "",
      email: "",
      phone: "",
      country: "",
      state: "",
      city: "",
      userType: "",
      password: "",
      confirmPassword: "",
      preferredNotification: {
        whatsappnotify: false,
        emailnotify: false,
      },
    });
  } catch (err) {
    console.error("Signup Error:", err.response?.data || err.message);
    alert("Signup failed. Please try again.");
  }
};


  return (
    <div className="flex justify-center items-center min-h-screen w-screen bg-gray-100">
      <div className="bg-gray-200 w-[430px] h-[570px] rounded-xl shadow-lg">
        <h2 className="text-4xl font-bold text-center my-4">Sign Up</h2>

        <form
          className="flex justify-center items-center flex-col gap-3"
          onSubmit={handleSubmit} /* <-- Correct usage here */
        >
          <input
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            placeholder="Full Name"
            className="input-box w-[320px] h-[40px] bg-white rounded-xl outline-none px-4 text-lg"
            required
          />

          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email"
            className="input-box w-[320px] h-[40px] bg-white rounded-xl outline-none px-4 text-lg"
            required
          />

          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Phone Number"
            className="input-box w-[320px] h-[40px] bg-white rounded-xl outline-none px-4 text-lg"
            required
          />

          <div className="flex gap-2">
            <input
              type="text"
              name="country"
              value={formData.country}
              onChange={handleChange}
              placeholder="Country"
              className="input-box h-[40px] w-[100px] bg-white rounded-l-xl rounded-r-md outline-none px-4 text-lg"
              required
            />
            <input
              type="text"
              name="state"
              value={formData.state}
              onChange={handleChange}
              placeholder="State"
              className="input-box h-[40px] w-[100px] bg-white rounded-md outline-none px-4 text-lg"
              required
            />
            <input
              type="text"
              name="city"
              value={formData.city}
              onChange={handleChange}
              placeholder="City"
              className="input-box h-[40px] w-[100px] bg-white rounded-r-xl rounded-l-md outline-none px-4 text-lg"
              required
            />
          </div>

          <select
            name="userType"
            value={formData.userType}
            onChange={handleChange}
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
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Password"
            className="input-box w-[320px] h-[40px] bg-white rounded-xl outline-none px-4 text-lg"
            required
          />

          <input
            type="password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            placeholder="Confirm Password"
            className="input-box w-[320px] h-[40px] bg-white rounded-xl outline-none px-4 text-lg"
            required
          />

          <p className="text-center text-gray-600 font-semibold">
            Preferred Notification:
            <label className="ml-2">
              <input
                type="checkbox"
                name="whatsappnotify"
                checked={formData.preferredNotification.whatsappnotify}
                onChange={handleChange}
                className="mr-1"
              />
              WhatsApp
            </label>
            <label className="ml-2">
              <input
                type="checkbox"
                name="emailnotify"
                checked={formData.preferredNotification.emailnotify}
                onChange={handleChange}
                className="mr-1"
              />
              Email
            </label>
          </p>

          <button
            type="submit"
            className="w-[150px] py-2 px-4 font-bold outline-none rounded-lg bg-blue-600 text-white"
          >
            Sign Up
          </button>

          <p className="text-center text-gray-600">
            Already have an account?{" "}
            <Link to="/signin" className="text-blue-600 hover:underline">
              Log in
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}
