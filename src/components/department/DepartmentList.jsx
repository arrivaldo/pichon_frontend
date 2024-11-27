import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import DataTable from 'react-data-table-component'
import { columns, DepartmentButtons } from '../../utils/DepartmentHelper'
import axios from 'axios'

function DepartmentList() {
  const [departments, setDepartments] = useState([])
  const [depLoading, setDepLoading] = useState(false)
  const [filteredDepartments, setFilteredDepartments] = useState([])




  const fetchDepartments = async () => {
    setDepLoading(true)
    try {
      const response = await axios.get("https://pichon-server.onrender.com/api/department", {
        headers: {
          "Authorization" : `Bearer ${localStorage.getItem('token')}`
        }
      })
      if(response.data.success) {
        let sno = 1;
        const data = response.data.departments.map((dep) => (
          {
            _id: dep._id,
            sno: sno++,
            dep_name: dep.dep_name,
            economico: dep.economico,
            placa: dep.placa,
            serie: dep.serie,
            description: dep.description,
            action: (<DepartmentButtons DepId={dep._id} onDepartmentDelete={onDepartmentDelete} />)
          }
        ))
        setDepartments(data)
        setFilteredDepartments(data)
      }
    } catch(error) {
      if(error.response && !error.response.data.success) {
        alert(error.response.data.error)
      }
    } finally {
      setDepLoading(false)
    }
  }

  useEffect(() => {
    fetchDepartments();
  }, [])

  const onDepartmentDelete = async (id) => {
    await fetchDepartments(); // Refresh the list from server after delete
  } 

  const filterDepartments = (e) => {
    const records = departments.filter((dep) =>
      dep.dep_name.toLowerCase().includes(e.target.value.toLowerCase()))
setFilteredDepartments(records)
    
  }

  return (
    <>{depLoading ? <div>Loading...</div> :
    <div className='p-5'>
      <div className='text-center'>
        <h3 className='text=2xl font-bold'>Manejo de Vehículos</h3>
      </div>
      <div style={{marginTop: '3%'}}  className="flex flex-col gap-2 md:items-center md:flex-row md:justify-between ">
          <input type='text' placeholder='Buscar por Marca'
          onChange={filterDepartments}
          className='px-4 py-0.5 border text-center' />
          <Link to="/admin-dashboard/add-department" className='px-4 py-1 text-center bg-[#0D6194] rounded text-white'>Añadir Vehículo</Link>
      </div>
      <div className='mt-5'>
          <DataTable 
          columns={columns}
          data={filteredDepartments}  // Use filteredDepartments instead of filterDepartments
          pagination
         />
      </div>
    </div>
    }</>
  )
}

export default DepartmentList
