import React from 'react'
import { useAuth } from '../context/AuthContext'
import Navbar from '../components/dashboard/Navbar'
import { Outlet } from 'react-router-dom'
import Sidebar from '../components/EmployeeDashboard/Sidebar'


const EmployeeDashboard = () => {
  const {user} = useAuth()

  return (
    <div className="flex flex-col md:flex-row h-screen">
      <Sidebar />
      <div className="flex-1 md:ml-64 bg-gray-100 overflow-y-auto">
        <Navbar />
        <Outlet />
    </div>
</div>
  )
}

export default EmployeeDashboard