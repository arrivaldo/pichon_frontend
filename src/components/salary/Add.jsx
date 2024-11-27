import React, { useEffect, useState } from 'react'
import { fetchDepartments, getEmployees } from '../../utils/EmployeeHelper'
import { useNavigate, useParams } from 'react-router-dom'

import axios from 'axios'

const Add = () => {


    const [salary, setSalary] = useState({
        employeeId: null,
        // basicSalary: 0,
        // allowances: 0,
        comment: '',
        payDate: null,
    })
    const [departments, setDepartments] = useState(null)
    const [employees, setEmployees] = useState([])
    const navigate = useNavigate()





    
    useEffect(() => {
        const getDepartments = async() => {

            const departments = await fetchDepartments()
            setDepartments(departments)
        }
        getDepartments()

    }, [])


    const handleDepartment = async (e) => {
            const emps = await getEmployees(e.target.value)
            setEmployees(emps)
    }




    const handleChange = (e) => {
        const { name, value } = e.target;
    
            setSalary((prevData) => ({...prevData, [name] : value}))
        
    }


    const handleSubmit = async (e) => {
        e.preventDefault()


         try {
            const response = await axios.post("https://pichon-server.onrender.com/api/salary/add", salary, {
                headers: {
                  Authorization: `Bearer ${localStorage.getItem('token')}`,
                },
              });
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
    <>{departments ? (
    <div className='max-w-4xl mx-auto mt-10 bg-white p-8 rounded-md shadow-md'>
        <h2 className='text-2xl font-bold mb-6'>Añadir Comentario</h2>
        <form onSubmit={handleSubmit}>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
               
                {/* Department */}

                <div>
                    <label className='block text-sm font-medium text-gray-700'>Vehículo</label>
                    <select name='department'
                    onChange={handleDepartment}
                    className='mt-1 p-2 block w-full border border-gray-300 rounded-md'
                    required
                    >
                        <option value="">Seleccionar Vehículo</option>
                        {departments.map((dep) => (
                            <option key={dep._id} value={dep._id}>{dep.dep_name}</option>
                        ))}
                    </select>
                </div>

                {/* Employee */}


                <div>
                    <label className='block text-sm font-medium text-gray-700'>Operador</label>
                    <select name='employeeId'
                    onChange={handleChange}
                    className='mt-1 p-2 block w-full border border-gray-300 rounded-md'
                    required
                    >
                        <option value="">Seleccionar Operador</option>
                        {employees.map((emp) => (
                            <option key={emp._id} value={emp._id}>{emp.employeeId}</option>
                        ))}
                    </select>
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



                {/* Designation */}


                {/* <div>
                    <label className='block text-sm font-medium text-gray-700'>Basic Salary</label>
                    <input 
                    type='number' 
                    name='basicSalary'
                    onChange={handleChange}
                    placeholder='basic salary'
                    className='mt-1 p-2 block w-full border border-gray-300 rounded-md'
                    required
                    // value={employee.designation}
                  
                    />
                </div> */}




                     {/* Salary */}

{/* 
                <div>
                    <label className='block text-sm font-medium text-gray-700'>Allowances</label>
                    <input 
                    type='number' 
                    name='allowances'
                    onChange={handleChange}                                        
                    placeholder='allowances'
                    className='mt-1 p-2 block w-full border border-gray-300 rounded-md'
                    required
                    />
                </div>


 */}



                <div>
                    <label className='block text-sm font-medium text-gray-700'>Comentario</label>
                    <textarea
                    name='comment'
                    onChange={handleChange}                                        
                    placeholder='Comment'
                    rows="5"
                    className='mt-1 p-2 block w-full border border-gray-300 rounded-md'
                    required
                    > </textarea>
                </div>



                <div>
                    <label className='block text-sm font-medium text-gray-700'>Fecha</label>
                    <input 
                    type='date' 
                    name='payDate'
                    onChange={handleChange}                                        
                    className='mt-1 p-2 block w-full border border-gray-300 rounded-md'
                    required
                    />
                </div>


              


            </div>
            <button
                    type='submit'
                    className='w-full mt-6 bg-[#0D6194] hover:bg-black text-white font-bold py-2 px-4 rounded-md'
                >
                        Añadir Comentario
                </button>
        </form>
    </div>
    ) : <div>Loading... </div> }</>
  )
}

export default Add