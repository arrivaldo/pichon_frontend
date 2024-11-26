import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FaBars, FaBuilding, FaCalendarAlt, FaCogs, FaMoneyBillWave, FaTachometerAlt, FaUsers } from 'react-icons/fa';

const AdminSidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      {/* Mobile Hamburger Menu */}
      <div style={{background: 'rgb(13 97 148)'}} className="bg-teal-600 text-white h-12 flex items-center justify-between px-4 md:hidden">
      <h3 className="hidden md:block text-lg sm:text-xl font-pacific">CDS ESTAFETA NLD</h3>
      <button
          className="text-2xl"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle sidebar"
        >
          <FaBars />
        </button>
      </div>

      {/* Sidebar */}
      <div
        className={`bg-gray-800 text-white h-full fixed top-0 left-0 transform ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        } md:translate-x-0 transition-transform duration-300 md:w-64 z-50`}
      >
        <div className="bg-[#083957] h-12 flex items-center justify-center">
          <h3 className="text-sm font-pacific font-bold">CDS ESTAFETA NLD</h3>
        </div>
        <nav className="space-y-2 p-4">
          <NavLink
            to="/admin-dashboard"
            className={({ isActive }) =>
              `${
                isActive ? 'bg-[#083957]' : ''
              } flex items-center space-x-4 py-2.5 px-4 rounded hover:bg-[#083957]`
            }
            end
          >
            <FaTachometerAlt />
            <span>Panel de Control</span>
          </NavLink>
          <NavLink
            to="/admin-dashboard/employees"
            className={({ isActive }) =>
              `${
                isActive ? 'bg-[#083957]' : ''
              } flex items-center space-x-4 py-2.5 px-4 rounded hover:bg-[#083957]`
            }
          >
            <FaUsers />
            <span>Operadores</span>
          </NavLink>
          <NavLink
            to="/admin-dashboard/departments"
            className={({ isActive }) =>
              `${
                isActive ? 'bg-[#083957]' : ''
              } flex items-center space-x-4 py-2.5 px-4 rounded hover:bg-[#083957]`
            }
          >
            <FaBuilding />
            <span>Vehículos</span>
          </NavLink>
          <NavLink
            to="/admin-dashboard/leaves"
            className={({ isActive }) =>
              `${
                isActive ? 'bg-[#083957]' : ''
              } flex items-center space-x-4 py-2.5 px-4 rounded hover:bg-[#083957]`
            }
          >
            <FaCalendarAlt />
            <span>Registros</span>
          </NavLink>
          <NavLink
            to="/admin-dashboard/salary/add"
            className={({ isActive }) =>
              `${
                isActive ? 'bg-[#083957]' : ''
              } flex items-center space-x-4 py-2.5 px-4 rounded hover:bg-[#083957]`
            }
          >
            <FaMoneyBillWave />
            <span>Comentarios</span>
          </NavLink>
          <NavLink
            to="/admin-dashboard/setting"
            className={({ isActive }) =>
              `${
                isActive ? 'bg-[#083957]' : ''
              } flex items-center space-x-4 py-2.5 px-4 rounded hover:bg-[#083957]`
            }          >
            <FaCogs />
            <span>Configuración</span>
          </NavLink>
        </nav>
      </div>

      {/* Overlay for mobile */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}
    </div>
  );
};

export default AdminSidebar;
