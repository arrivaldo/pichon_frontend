// src/components/HomeNavbar.js
import React from 'react';
import { useNavigate } from 'react-router-dom';

const HomeNavbar2 = () => {
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
    <nav className="flex absolute top-0 justify-between items-center px-8 py-4 text-white z-30">
      <div 
        onClick={handleLogoClick} 
        className="text-2xl font-bold cursor-pointer hover:text-gray-300 transition duration-300"
      >
        CDS ESTAFETA NLD
      </div>
      {/* <button 
        onClick={handleLoginClick} 
        className="bg-bLack border text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-300"
      >
        Login
      </button> */}
    </nav>
  );
};

export default HomeNavbar2;
