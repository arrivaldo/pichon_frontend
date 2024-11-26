import React, { useEffect, useState } from 'react'
import { fetchDepartments } from '../../utils/EmployeeHelper'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
const Add = () => {
    const navigate = useNavigate()
    const [departments, setDepartments] = useState([])
    const [formData, setFormData] = useState({})
    useEffect(() => {
        const getDepartments = async () => {
            const departments = await fetchDepartments()
            setDepartments(departments)
        }
        getDepartments()
    }, [])
    const handleChange = (e) => {
        const { name, value, files } = e.target;
        if(name === "image") {
            setFormData((prevData) => ({...prevData, [name] : files[0]}))
        } else {
            setFormData((prevData) => ({...prevData, [name] : value}))
        }
    }
    const handleSubmit = async (e) => {
        e.preventDefault()
        const formDataObj = new FormData()
        Object.keys(formData).forEach((key) => {
            formDataObj.append(key, formData[key])
            console.log("Form Data:", formData[key]); // Check if password is present
        })
        try {
            const response = await axios.post('http://localhost:5000/api/employee/add', formDataObj, {
              headers: {
                "Authorization": `Bearer ${localStorage.getItem('token')}`,
                "Content-Type": "multipart/form-data",
              },
            });
      
            if (response.data.success) {
              navigate("/admin-dashboard/employees");
            }
          } catch (error) {
            if (error.response && !error.response.data.success) {
              alert(error.response.data.error);
            }
          }
    }
  return (
    <div className='max-w-4xl mx-auto mt-10 bg-white p-8 rounded-md shadow-md'>
        <h2 className='text-2xl font-bold mb-6'>Agregar Operador</h2>
        <form onSubmit={handleSubmit}>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                <div>
                    <label className='block text-sm font-medium text-gray-700'>
                        Nombre
                    </label>
                    <input
                            type='text'
                            name='name'
                            onChange={handleChange}
                            placeholder='Insert Name'
                            className='mt-1 p-2 block w-full border border-gray-300 rounded-md'
                    />
                </div>
                {/*Email */}
                <div>
                    <label className='block text-sm font-medium text-gray-700'>Email</label>
                    <input type='email' name='email'
                    onChange={handleChange}
                    placeholder='Insertar Email'
                    className='mt-1 p-2 block w-full border border-gray-300 rounded-md'
                    required
                    />
                </div>
            {/*Employee ID */}
            <div>
                    <label className='block text-sm font-medium text-gray-700'>No. Identificación</label>
                    <input type='text' name='employeeId'
                    onChange={handleChange}
                    placeholder='ID'
                    className='mt-1 p-2 block w-full border border-gray-300 rounded-md'
                    />
                </div>
                {/*Date of birth */}
                <div>
                    <label className='block text-sm font-medium text-gray-700'>Fecha de Nacimiento</label>
                    <input type='date' name='dob' placeholder='DOB'
                    onChange={handleChange}
                    className='mt-1 p-2 block w-full border border-gray-300 rounded-md'
                    required
                    />
                </div>
                {/* Gender */}
                    <div>
                        <label className='block text-sm font-medium text-gray-700'>Género</label>
                        <select name='gender' 
                        onChange={handleChange}
                        className='mt-1 p-2 block w-full border border-gray-300 rounded-md'
                        required
                        >
                            <option value="">Seleccionar</option>
                            <option value="Hombre">Hombre</option>
                            <option value="Mujer">Mujer</option>
                            <option value="Otro">Otro</option>
                        </select>
                    </div>
                {/* Telefono */}

                <div>
                    <label className='block text-sm font-medium text-gray-700'>Teléfono</label>
                    <input type='text' name='phone'
                    onChange={handleChange}
                    placeholder='Teléfono'
                    className='mt-1 p-2 block w-full border border-gray-300 rounded-md'
                    />
                </div>
                
                {/* Designation */}
                <div>
                    <label className='block text-sm font-medium text-gray-700'>Designación</label>
                    <input type='text' name='designation'
                    onChange={handleChange}
                    placeholder='Designación'
                    className='mt-1 p-2 block w-full border border-gray-300 rounded-md'
                    />
                </div>
                {/* Department */}
                <div>
                    <label className='block text-sm font-medium text-gray-700'>Vehículo</label>
                    <select name='department'
                    onChange={handleChange}
                    className='mt-1 p-2 block w-full border border-gray-300 rounded-md'
                    required
                    >
                        <option value="">Seleccionar Vehículo</option>
                        {departments.map(dep => (
                            <option key={dep._id} value={dep._id}>{dep.dep_name}</option>
                        ))}
                    </select>
                </div>
                     {/* Salary */}
                <div>
                    <label className='block text-sm font-medium text-gray-700'>Salary</label>
                    <input type='number' name='salary'
                    onChange={handleChange}                                        placeholder='Salary'
                    className='mt-1 p-2 block w-full border border-gray-300 rounded-md'
                    required
                    />
                </div>
   {/* Password */}
   <div>
                    <label className='block text-sm font-medium text-gray-700'>Contraseña</label>
                    <input type='password' name='password' placeholder='*******'
                    onChange={handleChange}
                    className='mt-1 p-2 block w-full border border-gray-300 rounded-md'
                    required
                    />
                </div>
                {/* Role */}
   <div>
                    <label className='block text-sm font-medium text-gray-700'>Rol</label>
                    <select name='role'
                    onChange={handleChange}
                    className='mt-1 p-2 block w-full border border-gray-300 rounded-md'
                    required
                    >
                            <option value="">Seleccionar Rol</option>
                            <option value="admin">Admin</option>
                            <option value="employee">Operador</option>
                </select>
                </div>
                {/* Image Upload */}
                <div>
                    <label className='block text-sm font-medium text-gray-700'>Subir Imagen</label>
                    <input type='file' name='image'
                    onChange={handleChange}
                    placeholder='Upload Image'
                    accept='image/*'
                    className='mt-1 p-2 block w-full border border-gray-300 rounded-md'
                    required
                    />
                </div>
              
            </div>
            <button
                    type='submit'
                    className='w-full mt-6 bg-[#0D6194] hover:bg-black text-white font-bold py-2 px-4 rounded-md'
                >
                        Agregar Operador
                </button>
        </form>
    </div>
  )
}
export default Add