// src/components/HomeNavbar.js
import React from 'react';
import { useNavigate } from 'react-router-dom';

const HomeNavbar = () => {
  const navigate = useNavigate();

  // Function to navigate to the login page
  const handleLoginClick = () => {
    navigate('/login');
  };

  // Function to navigate to the root path
  const handleLogoClick = () => {
    navigate('/');
  };

  return (
    <nav className="flex justify-between items-center px-8 py-4 bg-gray-800 text-white">
      <div 
        onClick={handleLogoClick} 
        className="text-2xl font-bold cursor-pointer hover:text-gray-300 transition duration-300"
      >
        Admin System
      </div>
      <button 
        onClick={handleLoginClick} 
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-300"
      >
        Login
      </button>
    </nav>
  );
};

export default HomeNavbar;
