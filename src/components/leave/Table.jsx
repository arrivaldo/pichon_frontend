import React, { useEffect, useState } from "react";
import axios from "axios";
import { columns, LeaveButtons } from "../../utils/LeaveHelper";
import DataTable from "react-data-table-component";

const Table = () => {
  const [leaves, setLeaves] = useState([]);
  const [filteredLeaves, setFilteredLeaves] = useState(null);

  const fetchLeaves = async () => {
    try {
      const response = await axios.get("https://pichon-server.onrender.com/api/leave", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      if (response.data.success) {
        let sno = 1;

        const data = response.data.leaves.map((leave) => ({
          _id: leave._id,
          sno: sno++,
          employeeId: leave.employeeId.employeeId,
          name: leave.employeeId.userId.name,
          leaveType: leave.leaveType,
          economico: leave.economico,
          department: leave.employeeId.department.dep_name,
          days:
            // new Date(leave.endDate).getDate() -
            new Date(leave.startDate).getDate(),
          status: leave.status,
          action: <LeaveButtons Id={leave._id} />,
        }));
        
        setLeaves(data);
        setFilteredLeaves(data); // Initialize filteredLeaves with fetched data
      }
    } catch (error) {
      if (error.response && !error.response.data.success) {
        alert(error.response.data.error);
      }
    }
  };

  useEffect(() => {
    fetchLeaves();
  }, []);

  const filterByInput = (e) => {
    const data = leaves.filter((leave) =>
      leave.name.toLowerCase().includes(e.target.value.toLowerCase())
    );
    setFilteredLeaves(data);
  };

  const filterByButton = (status) => {
    const data = leaves.filter((leave) =>
      leave.status.toLowerCase() === status.toLowerCase()
    );
    setFilteredLeaves(data);
  };

  const showAllRecords = () => {
    setFilteredLeaves(leaves);
  };

  return (
    <>
      {filteredLeaves ? ( // Check if filteredLeaves is not null
        <div className="p-6">
          <div className="text-center">
            <h3 className="text-2xl font-bold">Manejo de Incidencias</h3>
          </div>
          <div style={{marginTop: '3%'}}  className="flex flex-col gap-2 md:items-center md:flex-row md:justify-between ">
            <input
              type="text"
              placeholder="Buscar por nombre"
              className="px-4 py-0.5 border"
              onChange={filterByInput}
            />
            <div className="space-x-3 flex">
              <button
                className="px-2 py-1 bg-[#0D6194] text-white hover:bg-black"
                onClick={showAllRecords} // All button to show all records
              >
                Todas
              </button>
              <button
                className="px-2 py-1 bg-[#0D6194] text-white hover:bg-black hidden md:block"
                onClick={() => filterByButton("Pending")}
              >
                Pendientes
              </button>
              <button
                className="px-2 py-1 bg-[#0D6194] text-white hover:bg-black md:hidden"
                onClick={() => filterByButton("Pending")}
              >
                Pend
              </button>
              <button
                className="px-2 py-1 bg-[#0D6194] text-white hover:bg-black hidden md:block"
                onClick={() => filterByButton("Approved")}
              >
                Aprovadas
              </button>
              <button
                className="px-2 py-1 bg-[#0D6194] text-white hover:bg-black md:hidden"
                onClick={() => filterByButton("Approved")}
              >
                Aprov
              </button>
              <button
                className="px-2 py-1 bg-[#0D6194] text-white hover:bg-black hidden md:block"
                onClick={() => filterByButton("Rejected")}
              >
                Rechazadas
              </button>
              <button
                className="px-2 py-1 bg-[#0D6194] text-white hover:bg-black md:hidden"
                onClick={() => filterByButton("Rejected")}
              >
                Rech
              </button>
            </div>
          </div>

          <div className="mt-3">
            <DataTable
              columns={columns}
              data={filteredLeaves} // Show filteredLeaves, even if it's an empty array
              pagination
              noDataComponent="No records found" // Custom "No records" message
            />
          </div>
        </div>
      ) : (
        <div>Loading</div>
      )}
    </>
  );
};

export default Table;
