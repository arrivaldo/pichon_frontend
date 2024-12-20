import React, { useEffect, useState } from 'react'
import { fetchDepartments } from '../../utils/EmployeeHelper'
import { useNavigate, useParams } from 'react-router-dom'

import axios from 'axios'

const Edit = () => {


    const [employee, setEmployee] = useState({
        name: '',
        phone: '',
        designation: '',
        salary: '',
        department: ''
    })
    const [departments, setDepartments] = useState(null)
    const navigate = useNavigate()
    const {id} = useParams()





    
    useEffect(() => {
        const getDepartments = async() => {

            const departments = await fetchDepartments()
            setDepartments(departments)
        }
        getDepartments()

    }, [])


    useEffect(() => {
        const fetchEmployee = async () => {
            try {
              const response = await axios.get(
                 `https://pichon-server.onrender.com/api/employee/${id}`, 
              {
                headers: {
                  "Authorization" : `Bearer ${localStorage.getItem('token')}`
                }
              })
              if(response.data.success) {
                    const employee = response.data.employee
                      setEmployee((prev) => ({
                        ...prev,
                         name: employee.userId.name,
                         phone: employee.phone,
                           designation: employee.designation,
                            salary: employee.salary,
                             department: employee.department 
                            }))
              }
            } catch(error) {
              if(error.response && !error.response.data.success) {
                alert(error.response.data.error)
              }
            } 
          };
          fetchEmployee();
    }, [])

    const handleChange = (e) => {
        const { name, value } = e.target;
    
            setEmployee((prevData) => ({...prevData, [name] : value}))
        
    }


    const handleSubmit = async (e) => {
        e.preventDefault()


        try {
            const response = await axios.put(`https://pichon-server.onrender.com/api/employee/${id}`,
                employee, {
                headers: {
                    "Authorization" : `Bearer ${localStorage.getItem('token')}`
                }
            })
            console.log("Response received:", response);

            if(response.data.success) {
                console.log("Employee request success")
                console.log("Navigating to /admin-dashboard/employees")
                navigate("/admin-dashboard/employees")
            }
    } catch(error) {
        if(error.response && !error.response.data.success) {
            alert(error.response.data.error)
            console.log(error.response.data.error)
        }
    }
    }

  return (
    <>{departments && employee ? (
    <div className='max-w-4xl mx-auto mt-10 bg-white p-8 rounded-md shadow-md'>
        <h2 className='text-2xl font-bold mb-6'>Editar Operador</h2>
        <form onSubmit={handleSubmit}>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                <div>
                    <label className='block text-sm font-medium text-gray-700'>
                        Nombre
                    </label>
                    <input
                            type='text'
                            name='name'
                            value={employee.name}
                            onChange={handleChange}
                            placeholder='Insertar Nombre'
                            className='mt-1 p-2 block w-full border border-gray-300 rounded-md'
                    />
                </div>


                <div>
                    <label className='block text-sm font-medium text-gray-700'>
                        Teléfono
                    </label>
                    <input
                            type='text'
                            name='phone'
                            value={employee.phone}
                            onChange={handleChange}
                            placeholder='Teléfono'
                            className='mt-1 p-2 block w-full border border-gray-300 rounded-md'
                    />
                </div>


            

                {/* Gender */}
                    {/* <div>
                        <label className='block text-sm font-medium text-gray-700'>Gender</label>
                        <select name='gender' 
                        onChange={handleChange}
                        value={employee.gender}
                        className='mt-1 p-2 block w-full border border-gray-300 rounded-md'
                        required
                        >
                            <option value="">Select Gender</option>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                            <option value="other">Other</option>
                        </select>
                    </div> */}


                {/* Marital Status */}

                {/* <div>
                        <label className='block text-sm font-medium text-gray-700'>Marital Status</label>
                        <select name='maritalStatus'
                        className='mt-1 p-2 block w-full border border-gray-300 rounded-md'
                        onChange={handleChange}
                        value={employee.maritalStatus}
                        required
                        >
                            <option value="">Select Status</option>
                            <option value="single">Single</option>
                            <option value="married">Married</option>
                            <option value="other">Other</option>
                        </select>
                    </div> */}


                {/* Designation */}


                <div>
                    <label className='block text-sm font-medium text-gray-700'>Designación</label>
                    <input type='text' name='designation'
                    onChange={handleChange}
                    value={employee.designation}
                    placeholder='Designación'
                    className='mt-1 p-2 block w-full border border-gray-300 rounded-md'
                    required
                    />
                </div>




                     {/* Salary */}


                <div>
                    <label className='block text-sm font-medium text-gray-700'>Kilometraje</label>
                    <input type='number' name='salary'
                    onChange={handleChange}                                        placeholder='10,000 km'
                    className='mt-1 p-2 block w-full border border-gray-300 rounded-md'
                    value={employee.salary}
                    required
                    />
                </div>



                {/* Department */}

                <div className='col-span-2'>
                    <label className='block text-sm font-medium text-gray-700'>Vehículo</label>
                    <select name='department'
                    onChange={handleChange}
                    value={employee.department}
                    className='mt-1 p-2 block w-full border border-gray-300 rounded-md'
                    required
                    >
                        <option value="">Seleccionar Vehículo</option>
                        {departments.map((dep) => (
                            <option key={dep._id} value={dep._id}>{dep.dep_name}</option>
                        ))}
                    </select>
                </div>

              


            </div>
            <button
                    type='submit'
                    className='w-full mt-6 bg-[#0D6194] hover:bg-black text-white font-bold py-2 px-4 rounded-md'
                >
                        Edit Employee
                </button>
        </form>
    </div>
    ) : <div>Loading... </div> }</>
  )
}

export default Edit