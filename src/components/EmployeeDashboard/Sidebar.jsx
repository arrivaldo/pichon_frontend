import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import {
  FaBars,
  FaBuilding,
  FaCalendarAlt,
  FaCogs,
  FaMoneyBillWave,
  FaTachometerAlt,
  FaUsers,
} from 'react-icons/fa';
import { useAuth } from '../../context/AuthContext';

const Sidebar = () => {
  const { user } = useAuth();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      {/* Mobile Hamburger Menu */}
      <div
        style={{ background: 'rgb(8 57 87)' }}
        className="bg-teal-600 text-white h-12 flex items-center justify-between px-4 md:hidden"
      >
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
          <h3 className="text-md px-4 text-center font-pacific">CDS ESTAFETA NLD</h3>
        </div>
        <div>
          <NavLink
            to="/employee-dashboard"
            className={({ isActive }) =>
              `${
                isActive ? 'bg-[#083957]' : ''
              } flex items-center space-x-4 block py-2.5 px-4 rounded hover:bg-[#083957]`
            }
            end
          >
            <FaTachometerAlt />
            <span>Panel de Control</span>
          </NavLink>
          <NavLink
            to={`/employee-dashboard/profile/${user._id}`}
            className={({ isActive }) =>
              `${
                isActive ? 'bg-[#083957]' : ''
              } flex items-center space-x-4 block py-2.5 px-4 rounded hover:bg-[#083957]`
            }
          >
            <FaUsers />
            <span>Mi Perfil</span>
          </NavLink>
          <NavLink
            to={`/employee-dashboard/leaves/${user._id}`}
            className={({ isActive }) =>
              `${
                isActive ? 'bg-[#083957]' : ''
              } flex items-center space-x-4 block py-2.5 px-4 rounded hover:bg-[#083957]`
            }
          >
            <FaBuilding />
            <span>Incidencias</span>
          </NavLink>
          <NavLink
            to={`/employee-dashboard/salary/${user._id}`}
            className={({ isActive }) =>
              `${
                isActive ? 'bg-[#083957]' : ''
              } flex items-center space-x-4 block py-2.5 px-4 rounded hover:bg-[#083957]`
            }
          >
            <FaCalendarAlt />
            <span>Comentarios</span>
          </NavLink>
          <NavLink
            to="/employee-dashboard/setting"
            className={({ isActive }) =>
              `${
                isActive ? 'bg-[#083957]' : ''
              } flex items-center space-x-4 block py-2.5 px-4 rounded hover:bg-[#083957]`
            }
          >
            <FaCogs />
            <span>Configuración</span>
          </NavLink>
        </div>
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

export default Sidebar;
