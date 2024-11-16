import React from 'react'
import { useAuth } from '../context/AuthContext'
import Navbar from '../components/dashboard/Navbar'
import { Outlet } from 'react-router-dom'
import Sidebar from '../components/EmployeeDashboard/Sidebar'


const EmployeeDashboard = () => {
  const {user} = useAuth()

  return (
    <div className='flex'>
      <Sidebar />
    <div className='flex-1 ml-64 bg-gray-100 h-screen'>
        <Navbar />
        <Outlet />
    </div>
</div>
  )
}

export default EmployeeDashboard