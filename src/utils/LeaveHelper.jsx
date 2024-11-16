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
        name: "Emp ID",
        selector: (row) => row.employeeId,
        width: "120px"
    },
    {
        name: "Name",
        selector: (row) => row.name,
        width: "120px"

        // sortable: true
    },
    {
        name: "Leave Type",
        selector: (row) => row.leaveType,
        width: "140px"

        // sortable: true
    },
    {
        name: "Department",
        selector: (row) => row.department,
        sortable: true,
        width: "170px"

    },
    {
        name: "Days",
        selector: (row) => row.days,
        width: "80px"
    },
    {
        name: "Status",
        selector: (row) => row.status,
        width: "120px"
    },
    {
        name: "Action",
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
            className="px-4 py-1 bg-teal-500 rounded text-white hover:bg-teal-600"
            onClick={() => handleView(Id)}
        >
            View
        </button>
    )
}