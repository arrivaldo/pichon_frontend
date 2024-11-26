import React from "react"
import { useNavigate } from "react-router-dom"
import axios from "axios"


export const columns = [
    {
        name: "S No",
        selector: (row) => row.sno,
        width: "80px"
    },
    {
        name: "Nombre",
        selector: (row) => row.name,
        sortable: true,
        width: "110px"

    },
    {
        name: "Imagen",
        selector: (row) => row.profileImage,
        width: "120px"

        // sortable: true
    },
    {
        name: "Vehículo",
        selector: (row) => row.dep_name,
        width: "150px"

        // sortable: true
    },
    {
      name: "Económico",
      selector: (row) => row.economico, // Display economico here
      sortable: true,
      width: "190px",
  },
    {
        name: "Fecha de Nacimiento",
        selector: (row) => row.dob,
        sortable: true,
        width: "180px"

    },
    {
      name: "Teléfono",
      selector: (row) => row.phone,
      sortable: true,
      width: "130px"

  },
    {
        name: "Gestión",
        selector: (row) => row.action,
        center: "true"
    },
]



export const fetchDepartments = async () => {

    let departments

    try {
      const response = await axios.get("http://localhost:5000/api/department", {
        headers: {
          "Authorization" : `Bearer ${localStorage.getItem('token')}`
        }
      })
      if(response.data.success) {
            departments = response.data.departments
      }
    } catch(error) {
      if(error.response && !error.response.data.success) {
        alert(error.response.data.error)
      }
    } 

    return departments 
  }


  // employees for salary form

  export const getEmployees = async (id) => {

    let employees;

    try {
      const response = await axios.get(`http://localhost:5000/api/employee/department/${id}`, {
        headers: {
          "Authorization" : `Bearer ${localStorage.getItem('token')}`
        }
      })
      if(response.data.success) {
            employees = response.data.employees
      }
    } catch(error) {
      if(error.response && !error.response.data.success) {
        alert(error.response.data.error)
      }
    } 

    return employees 
  }





  export const EmployeeButtons = ({Id}) => {
    const navigate = useNavigate()
   

    return (
        <div className="flex space-x-3">
            <button className="px-3 py-1 bg-teal-600 text-white"
            onClick={() => navigate(`/admin-dashboard/employees/${Id}`)}
            >Ver</button>
            <button className="px-3 py-1 bg-[#0D6194] text-white"
            onClick={() => navigate(`/admin-dashboard/employees/edit/${Id}`)}
            >Editar</button>
             <button className="px-3 py-1 bg-red-600 text-white"
              onClick={() => navigate(`/admin-dashboard/employees/leaves/${Id}`)}
            >Registros</button>
             <button className="px-3 py-1 bg-yellow-600 text-white"
              onClick={() => navigate(`/admin-dashboard/employees/salary/${Id}`)}
           >Commentarios</button>
            
        </div>
    )
}