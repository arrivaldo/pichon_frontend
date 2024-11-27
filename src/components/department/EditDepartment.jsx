import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const EditDepartment = () => {
    const {id} = useParams()
    const [department, setDepartment] = useState([])
    const [depLoading, setDepLoading] = useState(false)
    const navigate = useNavigate()

    useEffect(() => {
        const fetchDepartments = async () => {
          setDepLoading(true)
          try {
            const response = await axios.get(
               `https://pichon-server.onrender.com/api/department/${id}`, 
            {
              headers: {
                "Authorization" : `Bearer ${localStorage.getItem('token')}`
              }
            })
            if(response.data.success) {
                    setDepartment(response.data.department)
            }
          } catch(error) {
            if(error.response && !error.response.data.success) {
              alert(error.response.data.error)
            }
          } finally {
            setDepLoading(false)
          }
        };
        fetchDepartments();
    }, [])

    const handleChange = (e) => {
        const {name, value} = e.target;
        setDepartment({...department, [name] : value })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        console.log("Form submitted, navigating...");


        try {
                const response = await axios.put(`https://pichon-server.onrender.com/api/department/${id}`,
                    department, 
                    {
                    headers: {
                        "Authorization" : `Bearer ${localStorage.getItem('token')}`
                    }
                })
                console.log("Response received:", response);

                if(response.data.success) {
                    console.log("Department edition success")
                    console.log("Navigating to /admin-dashboard/departments")
                    navigate("/admin-dashboard/departments")
                }
        } catch(error) {
            if(error.response && !error.response.data.success) {
                alert(error.response.data.error)
                console.log(error.response.data.error)
            }
        }    
    }

  return (
    <>{depLoading ? <div>Loading...</div> :
            <div className='max-w-xl mx-auto mt-10 bg-white p-8 rounded-md shadow-md w-96'>
        <h2 className='text-2xl font-bold mb-6'>Editar Vehículo</h2>
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor='dep_name'
                className='text-sm font-medium text-gray-700'>Vehículo</label>
                <input type='text' name='dep_name'
                onChange={handleChange}
                placeholder='Department Name'
                value={department.dep_name}
                className='mt-1 w-full p-2 border border-gray-300 rounded-md'
                />
            </div>
            <div>
                <label htmlFor='placa'
                className='text-sm font-medium text-gray-700'>Placa</label>
                <input type='text' name='placa'
                onChange={handleChange}
                placeholder='Placa'
                value={department.placa}
                className='mt-1 w-full p-2 border border-gray-300 rounded-md'
                />
            </div>
            <div>
                <label htmlFor='economico'
                className='text-sm font-medium text-gray-700'>Economico</label>
                <input type='text' name='economico'
                onChange={handleChange}
                placeholder='Economico'
                value={department.economico}
                className='mt-1 w-full p-2 border border-gray-300 rounded-md'
                />
            </div>
            <div className='mt-3'>
                <label className='block text-sm font-medium text-gray-700' htmlFor='description'>Description</label>
                <textarea placeholder='Description' 
                onChange={handleChange}
                value={department.description}
                name='description' className='mt-1 p-2 block w-full border border-gray-300 rounded-md' rows="4"></textarea>
            </div>
            <button type='submit' className='w-full mt-6 bg-[#0D6194] hover:bg-black text-white font-bold py-2 px-4 rounded'>Add Department</button>
        </form>
    </div>
    }</>
    )
}

export default EditDepartment