import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const AddDepartment = () => {

    const [department, setDepartment] = useState({
        dep_name: '',
        description: ''
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
                const response = await axios.post('https://ims-server-hjfy.onrender.com/api/department/add', department, {
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
        <h2 className='text-2xl font-bold mb-6'>Add Department</h2>
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor='dep_name'
                className='text-sm font-medium text-gray-700'>Department Name</label>
                <input type='text' name='dep_name'
                onChange={handleChange}
                placeholder='Department Name'
                className='mt-1 w-full p-2 border border-gray-300 rounded-md'
                />
            </div>
            <div className='mt-3'>
                <label className='block text-sm font-medium text-gray-700' htmlFor='description'>Description</label>
                <textarea placeholder='Description' 
                onChange={handleChange}
                name='description' className='mt-1 p-2 block w-full border border-gray-300 rounded-md' rows="4"></textarea>
            </div>
            <button type='submit' className='w-full mt-6 bg-teal-600 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded'>Add Department</button>
        </form>
    </div>
  )
}

export default AddDepartment

