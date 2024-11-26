import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const View = () => {
  const { id } = useParams();
  const [employee, setEmployee] = useState(null);

  useEffect(() => {
    const fetchEmployee = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/employee/${id}`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
          },
        });
        if (response.data.success) {
          setEmployee(response.data.employee);
        }
      } catch (error) {
        if (error.response && !error.response.data.success) {
          alert(error.response.data.error);
        }
      }
    };
    fetchEmployee();
  }, [id]);

  return (
    <>
      {employee ? (
        <div className="max-w-3xl mx-auto mt-10 bg-white p-8 rounded-md shadow-md">
          <h2 className="text-2xl font-bold mb-8 text-center">Detalles del Operador</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center  place-items-center">
            {/* Updated to use Cloudinary URL */}
            <img
              src={employee.userId.profileImage}
              alt="Profile"
              className="rounded-full border w-72"
            />
            <div>
              <div className="flex items-center space-x-3 mb-5">
                <p className="text-lg font-bold">Nombre:</p>
                <p className="font-medium">{employee.userId.name}</p>
              </div>
              <div className="flex items-center space-x-3 mb-5">
                <p className="text-lg font-bold">No. Identificación:</p>
                <p className="font-medium">{employee.employeeId}</p>
              </div>
              <div className="flex items-center space-x-3 mb-5">
                <p className="text-lg font-bold">Fecha de Nacimiento:</p>
                <p className="font-medium">{new Date(employee.dob).toLocaleDateString()}</p>
              </div>
              <div className="flex items-center space-x-3 mb-5">
                <p className="text-lg font-bold">Vehículo:</p>
                <p className="font-medium">{employee.department.dep_name}</p>
              </div>
              <div className="flex items-center space-x-3 mb-5">
                <p className="text-lg font-bold">Económico:</p>
                <p className="font-medium">{employee.department.economico}</p>
              </div>
              <div className="flex items-center space-x-3 mb-5">
                <p className="text-lg font-bold">Teléfono:</p>
                <p className="font-medium">{employee.phone}</p>
              </div>
              <div className="flex items-center space-x-3 mb-5">
                <p className="text-lg font-bold">Género:</p>
                <p className="font-medium">{employee.gender}</p>
              </div>
             
              {/* <div className="flex items-center space-x-3 mb-5">
                <p className="text-lg font-bold">Marital Status:</p>
                <p className="font-medium">{employee.maritalStatus}</p>
              </div> */}
            </div>
          </div>
        </div>
      ) : (
        <div>Loading ...</div>
      )}
    </>
  );
};

export default View;
