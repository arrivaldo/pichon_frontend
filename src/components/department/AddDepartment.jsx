import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const AddDepartment = () => {

    const [department, setDepartment] = useState({
        dep_name: '',
        description: '',
        placa: '',
        economico: '',
        serie: '',
    })

    const navigate = useNavigate()

    const handleChange = (e) => {
        const {name, value} = e.target;
        setDepartment({...department, [name] : value })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        console.log("Form submitted, navigating...");
        navigate("/admin-dashboard/departments");


        try {
                const response = await axios.post('https://pichon-server.onrender.com/api/department/add', department, {
                    headers: {
                        "Authorization" : `Bearer ${localStorage.getItem('token')}`
                    }
                })
                console.log("Response received:", response);

                if(response.data.success) {
                    console.log("Departement request success")
                    console.log("Navigating to /admin-dashboard/departments")
                    navigate("/admin-dashboard/departments")
                }
        } catch(error) {
            if(error.response && !error.response.data.success) {
                alert(error.response.data.error)
                console.log(error.response.data.error)
            }
        }
        setTimeout(() => {
            navigate("/admin-dashboard/departments");
        }, 1000);
    
    }

  return (
    <div className='max-w-xl mx-auto mt-10 bg-white p-8 rounded-md shadow-md w-96'>
        <h2 className='text-2xl font-bold mb-6'>Añadir Vehículo</h2>
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor='dep_name'
                className='text-sm font-medium text-gray-700'>Marca</label>
                <input type='text' name='dep_name'
                onChange={handleChange}
                placeholder='Volkswagen Vento'
                className='mt-1 w-full p-2 border border-gray-300 rounded-md'
                />
            </div>
            <div>
                <label htmlFor='placa'
                className='text-sm font-medium text-gray-700'>Placa</label>
                <input type='text' name='placa'
                onChange={handleChange}
                placeholder='Placa'
                className='mt-1 w-full p-2 border border-gray-300 rounded-md'
                />
            </div>
            <div>
                <label htmlFor='economico'
                className='text-sm font-medium text-gray-700'>Económico</label>
                <input type='text' name='economico'
                onChange={handleChange}
                placeholder='Económico'
                className='mt-1 w-full p-2 border border-gray-300 rounded-md'
                />
            </div>
            <div>
                <label htmlFor='serie'
                className='text-sm font-medium text-gray-700'>No. Serie</label>
                <input type='text' name='serie'
                onChange={handleChange}
                placeholder='Serie'
                className='mt-1 w-full p-2 border border-gray-300 rounded-md'
                />
            </div>
            <div className='mt-3'>
                <label className='block text-sm font-medium text-gray-700' htmlFor='description'>Descripción</label>
                <textarea placeholder='Descripción' 
                onChange={handleChange}
                name='description' className='mt-1 p-2 block w-full border border-gray-300 rounded-md' rows="4"></textarea>
            </div>
            <button type='submit' className='w-full mt-6 bg-[#0D6194] hover:bg-black text-white font-bold py-2 px-4 rounded'>Generar</button>
        </form>
    </div>
  )
}

export default AddDepartment

