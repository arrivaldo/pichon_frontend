// src/pages/Landing.js
import React from 'react';
import HomeNavbar from '../components/HomeNavbar';
import { useNavigate } from 'react-router-dom';

const Landing = () => {
  const navigate = useNavigate();

  // Function to navigate to the login page
  const handleLoginClick = () => {
    navigate('/login');
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Navbar */}
      <HomeNavbar />

      {/* Hero Section */}
      <div className="flex flex-col items-center justify-center text-center px-8 py-20 md:py-40">
        <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
          Car Incident Management Simplified
        </h1>
        <p className="text-lg md:text-xl text-gray-300 max-w-2xl mb-8">
          Quickly and efficiently manage car incident reports, monitor cases, and maintain a streamlined process. Our system is built to make incident handling smooth and stress-free.
        </p>
        <button 
          onClick={handleLoginClick} 
          className="bg-blue-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 transition duration-300"
        >
          Get Started
        </button>
      </div>

      {/* Features Section */}
      <div className="bg-gray-800 py-16 px-8">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Key Features</h2>
          <p className="text-gray-300 mb-10">
            Our platform provides essential tools for managing incidents, improving response time, and enhancing communication.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="p-6 bg-gray-700 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold mb-4">Real-time Tracking</h3>
              <p className="text-gray-300">
                Monitor incidents and responses in real time, ensuring fast and accurate updates.
              </p>
            </div>
            {/* Feature 2 */}
            <div className="p-6 bg-gray-700 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold mb-4">Automated Reporting</h3>
              <p className="text-gray-300">
                Generate detailed reports with a click, allowing for quick insights and analytics.
              </p>
            </div>
            {/* Feature 3 */}
            <div className="p-6 bg-gray-700 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold mb-4">Incident History</h3>
              <p className="text-gray-300">
                Access historical data for every incident, enabling better analysis and prevention.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action Section */}
      <div className="flex flex-col items-center bg-blue-600 py-16 text-center text-white">
        <h2 className="text-3xl font-bold mb-4">Ready to Make Incident Management Easier?</h2>
        <p className="text-lg mb-6">
          Get started today and streamline your incident tracking and response process.
        </p>
        <button 
          onClick={handleLoginClick} 
          className="bg-white text-blue-600 px-8 py-3 rounded-lg text-lg font-semibold hover:bg-gray-200 transition duration-300"
        >
          Sign Up Now
        </button>
      </div>
    </div>
  );
};

export default Landing;
