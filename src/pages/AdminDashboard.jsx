import React from 'react';
import { useAuth } from '../context/AuthContext';
import AdminSidebar from '../components/dashboard/AdminSidebar';
import Navbar from '../components/dashboard/Navbar';
import AdminSummary from '../components/dashboard/AdminSummary';
import { Outlet } from 'react-router-dom';

const AdminDashboard = () => {
  const { user } = useAuth();

  return (
    <div className="flex flex-col md:flex-row h-screen">
      <AdminSidebar />
      <div className="flex-1 md:ml-64 bg-gray-100 overflow-y-auto">
        <Navbar />
        <Outlet />
      </div>
    </div>
  );
};

export default AdminDashboard;
