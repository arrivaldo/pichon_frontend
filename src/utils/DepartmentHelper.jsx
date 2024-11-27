import { useNavigate } from "react-router-dom"
import axios from "axios"

export const columns = [
    {
        name: "S No",
        selector: (row) => row.sno
    },
    {
        name: "Marca",
        selector: (row) => row.dep_name,
        sortable: true
    },
    {
        name: "Placa",
        selector: (row) => row.placa,
        sortable: true
    },
    // {
    //     name: "No. Serie",
    //     selector: (row) => row.serie,
    //     sortable: true
    // },
    {
        name: "Económico",
        selector: (row) => row.economico,
        sortable: true
    },
    {
        name: "Descripción",
        selector: (row) => row.description,
        sortable: true
    },
    {
        name: "Gestión",
        selector: (row) => row.action
    },
]

export const DepartmentButtons = ({DepId, onDepartmentDelete}) => {
    const navigate = useNavigate()

    const handleDelete = async (id) => {
        const confirm = window.confirm("Do you want to delete?")
        if(confirm) {
            try {
                const response = await axios.delete(`https://pichon-server.onrender.com/api/department/${id}`, {
                    headers: {
                        "Authorization" : `Bearer ${localStorage.getItem('token')}`
                    }
                })
                if(response.data.success) {
                    await onDepartmentDelete(id) // Trigger the list refresh
                    navigate("/admin-dashboard/departments") // Navigate after the list update
                }
            } catch(error) {
                if(error.response && !error.response.data.success) {
                    alert(error.response.data.error)
                }
            }  
        }
    }

    return (
        <div className="flex space-x-3">
            <button className="px-3 py-1 bg-[#0D6194] text-white"
            onClick={() => navigate(`/admin-dashboard/department/${DepId}`)}
            >Editar</button>
            <button className="px-3 py-1 bg-red-600 text-white"
            onClick={() => handleDelete(DepId)}
            >Borrar</button>
        </div>
    )
}
