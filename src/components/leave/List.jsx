import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import axios from 'axios';

const List = () => {
  const { user } = useAuth();
  const [leaves, setLeaves] = useState(null);
  const [searchTerm, setSearchTerm] = useState(''); // State for the search term
  let sno = 1;
  const { id } = useParams();

  const fetchLeaves = async () => {
    try {
      const response = await axios.get(
        `http://localhost:5000/api/leave/${id}/${user.role}`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
          },
        }
      );
      if (response.data.success) {
        setLeaves(response.data.leaves);
      }
    } catch (error) {
      if (error.response && !error.response.data.success) {
        alert(error.message);
      }
    }
  };

  useEffect(() => {
    fetchLeaves();
  }, []);

  if (!leaves) {
    return <div>Loading...</div>;
  }

  // Filter leaves based on the search term
  const filteredLeaves = leaves.filter((leave) =>
    leave.reason.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="p-6 overflow-x-hidden">
      <div className="text-center">
        <h3 className="text-2xl font-bold">Manejo de Incidencias</h3>
      </div>
      <div className="flex flex-col gap-2 md:items-center md:flex-row md:justify-between">
        <input
          type="text"
          placeholder="Buscar por descripción"
          className="px-4 py-0.5 border mt-4 text-center"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)} // Update the search term
        />
        {user.role === 'employee' && (
          <Link
            to="/employee-dashboard/add-leave"
            className="px-4 py-1 bg-[#0D6194] rounded text-white text-center"
          >
            Nueva Incidencia
          </Link>
        )}
      </div>

      {/* Responsive Table */}
      <div className="overflow-x-auto mt-6">
        <table className="w-full text-sm text-left text-gray-500">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 border border-gray-200">
            <tr>
              <th className="px-6 py-3">SNO</th>
              <th className="px-6 py-3">Tipo</th>
              <th className="px-6 py-3">Fecha</th>
              <th className="px-6 py-3">Económico</th>
              <th className="px-6 py-3">Descripción</th>
              <th className="px-6 py-3">Estatus</th>
            </tr>
          </thead>
          <tbody>
            {filteredLeaves.map((leave, index) => (
              <tr
                key={leave._id || index} // Fallback to index if leave._id is not unique
                className="bg-white border-b"
              >
                <td className="px-6 py-3">{sno++}</td>
                <td className="px-6 py-3">{leave.leaveType}</td>
                <td className="px-6 py-3">
                  {new Date(leave.startDate).toLocaleDateString()}
                </td>
                <td className="px-6 py-3">{leave.economico}</td>
                <td className="px-6 py-3">{leave.reason}</td>
                <td className="px-6 py-3">{leave.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default List;
