import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { EmployeeButtons, columns } from '../../utils/EmployeeHelper';
import DataTable from 'react-data-table-component';

const List = () => {
  const [employees, setEmployees] = useState([]);
  const [empLoading, setEmpLoading] = useState(false);
  const [filteredEmployee, setFilteredEmployees] = useState([]);

  useEffect(() => {
    const fetchEmployees = async () => {
      setEmpLoading(true);
      try {
        const response = await axios.get('http://localhost:5000/api/employee', {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
          },
        });
        if (response.data.success) {
          let sno = 1;
          const data = response.data.employees.map((emp) => ({
            _id: emp._id,
            sno: sno++,
            dep_name: emp.department.dep_name,
            economico: emp.department.economico, // Add economico here
            name: emp.userId.name,
            phone: emp.phone,
            dob: new Date(emp.dob).toLocaleDateString(),
            profileImage: (
              <img
                className="rounded-full"
                src={emp.userId.profileImage} // Updated to use Cloudinary URL
                alt="Profile"
                width={50}
                height={50}
              />
            ),
            action: <EmployeeButtons Id={emp._id} />,
          }));
          setEmployees(data);
          setFilteredEmployees(data);
        }
      } catch (error) {
        if (error.response && !error.response.data.success) {
          alert(error.response.data.error);
        }
      } finally {
        setEmpLoading(false);
      }
    };
    fetchEmployees();
  }, []);

  const handleFilter = (e) => {
    const records = employees.filter((emp) =>
      emp.name.toLowerCase().includes(e.target.value.toLowerCase())
    );
    setFilteredEmployees(records);
  };

  return (
    <div className="p-6">
      <div className="text-center">
        <h3 className="text=2xl font-bold">Gestión de Operadores</h3>
      </div>
      <div style={{marginTop: '3%'}} className="flex flex-col gap-2 md:items-center md:flex-row md:justify-between ">
        <input
          type="text"
          placeholder="Buscar por nombre"
          onChange={handleFilter}
          className="px-4 py-0.5 border text-center"
        />
        <Link
          to="/admin-dashboard/add-employee"
          className="px-4 py-1 bg-[#0D6194] rounded text-white text-center"
        >
          Agregar Operador
        </Link>
      </div>
      <div className="mt-6">
        <DataTable columns={columns} data={filteredEmployee} pagination />
      </div>
    </div>
  );
};

export default List;
