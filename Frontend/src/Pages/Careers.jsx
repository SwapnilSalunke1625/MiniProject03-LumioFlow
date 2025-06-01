import React from 'react';
import { Link } from 'react-router-dom';
import logo from "./assests/icons/logo.png";

const Careers = () => {
  const jobOpenings = [
    {
      title: "Senior Software Engineer",
      department: "Engineering",
      location: "Remote",
      type: "Full-time",
      description: "Join our engineering team to build next-generation energy management solutions."
    },
    {
      title: "Product Manager",
      department: "Product",
      location: "Hybrid",
      type: "Full-time",
      description: "Lead product development and strategy for our energy management platform."
    },
    {
      title: "UX Designer",
      department: "Design",
      location: "Remote",
      type: "Full-time",
      description: "Create intuitive and engaging user experiences for our energy management products."
    },
    {
      title: "Customer Success Manager",
      department: "Customer Success",
      location: "Hybrid",
      type: "Full-time",
      description: "Ensure customer satisfaction and drive product adoption."
    }
  ];

  const benefits = [
    {
      title: "Health & Wellness",
      items: ["Comprehensive health insurance", "Mental health support", "Fitness reimbursement"]
    },
    {
      title: "Work-Life Balance",
      items: ["Flexible work hours", "Remote work options", "Generous PTO"]
    },
    {
      title: "Growth & Development",
      items: ["Learning budget", "Career development programs", "Conference attendance"]
    },
    {
      title: "Perks & Benefits",
      items: ["Competitive salary", "Stock options", "Home office setup"]
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="fixed top-0 left-0 w-full z-50 bg-black/90 shadow-lg">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <Link to="/">
            <img src={logo} alt="Logo" className="w-24 h-auto" />
          </Link>
          <nav className="hidden md:flex gap-8 text-sm font-semibold">
            <Link to="/" className="hover:text-green-400 transition">HOME</Link>
            <Link to="/products" className="hover:text-green-400 transition">PRODUCTS</Link>
            <Link to="/energy-management" className="hover:text-green-400 transition">HOME ENERGY MANAGEMENT</Link>
            <Link to="/resources" className="hover:text-green-400 transition">RESOURCES</Link>
            <Link to="/about" className="hover:text-green-400 transition">ABOUT</Link>
          </nav>
          <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-5 rounded-xl transition-all duration-300 shadow-lg">
            SHOP
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-6">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Join Our Team</h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Help us build the future of energy management. We're looking for passionate individuals who want to make a difference.
            </p>
          </div>

          {/* Benefits Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-gray-900 rounded-xl p-6">
                <h3 className="text-xl font-bold mb-4">{benefit.title}</h3>
                <ul className="space-y-2">
                  {benefit.items.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-green-400">✓</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Job Openings Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center">Open Positions</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {jobOpenings.map((job, index) => (
                <div key={index} className="bg-gray-900 rounded-xl p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-xl font-bold">{job.title}</h3>
                      <p className="text-green-400">{job.department}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm text-gray-400">{job.location}</p>
                      <p className="text-sm text-gray-400">{job.type}</p>
                    </div>
                  </div>
                  <p className="text-gray-300 mb-4">{job.description}</p>
                  <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-lg transition-all duration-300">
                    Apply Now
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Culture Section */}
          <div className="bg-gray-900 rounded-xl p-8 mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center">Our Culture</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-4xl mb-4">🎯</div>
                <h3 className="text-xl font-bold mb-2">Mission-Driven</h3>
                <p className="text-gray-300">We're committed to making energy management accessible to everyone.</p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-4">🤝</div>
                <h3 className="text-xl font-bold mb-2">Collaborative</h3>
                <p className="text-gray-300">We believe in the power of teamwork and shared success.</p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-4">🚀</div>
                <h3 className="text-xl font-bold mb-2">Innovative</h3>
                <p className="text-gray-300">We encourage creativity and continuous learning.</p>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Join Us?</h2>
            <p className="text-xl text-gray-300 mb-8">
              Don't see a position that matches your skills? We're always looking for talented individuals.
            </p>
            <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-8 rounded-lg transition-all duration-300">
              Send Your Resume
            </button>
          </div>
        </div>
      </main>

      {/* Footer */}
     
    </div>
  );
};

export default Careers; 