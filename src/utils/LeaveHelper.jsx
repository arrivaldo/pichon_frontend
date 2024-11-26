import React from "react"
import { useNavigate } from "react-router-dom"
import axios from "axios"


export const columns = [
    {
        name: "S No",
        selector: (row) => row.sno,
        width: "70px"
    },
    {
        name: "Op. ID",
        selector: (row) => row.employeeId,
        width: "150px"
    },
    {
        name: "Nombre",
        selector: (row) => row.name,
        width: "120px"

        // sortable: true
    },
    {
        name: "Tipo",
        selector: (row) => row.leaveType,
        width: "150px"

        // sortable: true
    },
    {
        name: "Vehículo",
        selector: (row) => row.department,
        sortable: true,
        width: "130px"

    },
    {
        name: "Económico",
        selector: (row) => row.economico,
        width: "150px"
    },
    {
        name: "Estatus",
        selector: (row) => row.status,
        width: "120px"
    },
    {
        name: "Acción",
        selector: (row) => row.action,
        center: "true",
    },
]


export const LeaveButtons = ({ Id }) => {

    const navigate = useNavigate()

    const handleView = (id) => {
        navigate(`/admin-dashboard/leave/${id}`)
    }

    return (
        <button
            className="px-4 py-1 bg-[#0D6194] rounded text-white hover:bg-teal-600"
            onClick={() => handleView(Id)}
        >
            Ver
        </button>
    )
}