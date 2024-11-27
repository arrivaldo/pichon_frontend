import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const Detail = () => {
  const { id } = useParams();
  const [leave, setLeave] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchLeave = async () => {
      try {
        const response = await axios.get(
          `https://pichon-server.onrender.com/api/leave/detail/${id}`,
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        );
        if (response.data.success) {
          console.log(response.data.leave); // Debugging: Check if `images` exists

          setLeave(response.data.leave);
        }
      } catch (error) {
        if (error.response && !error.response.data.success) {
          alert(error.response.data.error);
        }
      }
    };
    fetchLeave();
  }, []);

  const changeStatus = async (id, status) => {
    try {
      const response = await axios.put(
        `http://localhost:5000/api/leave/${id}`,
        { status },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      if (response.data.success) {
        navigate("/admin-dashboard/leaves");
      }
    } catch (error) {
      if (error.response && !error.response.data.success) {
        alert(error.response.data.error);
      }
    }
  };

  return (
    <>
      {leave ? (
        <div className="max-w-3xl mx-auto mt-10 bg-white p-8 rounded-md shadow-md">
          <h2 className="text-2xl font-bold mb-8 text-center">
            Detalles de Incidencia
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-1 gap-6 items-center">
            {/* <img
              src={`http://localhost:5000/${leave.employeeId.userId.profileImage}`}
              alt=""
              className="rounded-full border w-72"
            /> */}
            <div>
              <div className="flex items-center space-x-3 mb-5">
                <p className="text-lg font-bold">Nombre:</p>
                <p className="font-medium">{leave.employeeId.userId.name}</p>
              </div>
              <div className="flex items-center space-x-3 mb-5">
                <p className="text-lg font-bold">ID Operador:</p>
                <p className="font-medium">{leave.employeeId.employeeId}</p>
              </div>
              <div className="flex items-center space-x-3 mb-5">
                <p className="text-lg font-bold">Tipo:</p>
                <p className="font-medium">{leave.leaveType}</p>
              </div>
              <div className="flex space-x-3 mb-5">
                <p className="text-lg font-bold">Descripcíón:</p>
                <p className="font-medium">{leave.reason}</p>
              </div>
              <div className="flex items-center space-x-3 mb-5">
                <p className="text-lg font-bold">Económico:</p>
                <p className="font-medium">{leave.economico}</p>
              </div>
              <div className="flex items-center space-x-3 mb-5">
                <p className="text-lg font-bold">Vehículo:</p>
                <p className="font-medium">
                  {leave.employeeId.department.dep_name}
                </p>
              </div>
              <div className="flex items-center space-x-3 mb-5">
                <p className="text-lg font-bold">Fecha:</p>
                <p className="font-medium">
                  {new Date(leave.startDate).toLocaleDateString()}
                </p>
              </div>
              {/* <div className='flex items-center space-x-3 mb-5'>
                <p className='text-lg font-bold'>End Date:</p>
                <p className='font-medium'>{new Date(leave.endDate).toLocaleDateString()}</p>
            </div> */}
              <div className="flex items-center space-x-3 mb-5">
                <p className="text-lg font-bold">
                  {leave.status === "Pending" ? "Action:" : "Status:"}
                </p>
                {leave.status === "Pending" ? (
                  <div className="flex space-x-2">
                    <button
                      className="px-2 py-0.5 bg-teal-300 hover:bg-teal-400"
                      onClick={() => changeStatus(leave._id, "Aprovada")}
                    >
                      Aprovar
                    </button>
                    <button
                      className="px-2 py-0.5 bg-red-300 hover:bg-red-400"
                      onClick={() => changeStatus(leave._id, "Rechazada")}
                    >
                      Rechazar
                    </button>
                  </div>
                ) : (
                  <p className="font-medium">{leave.status}</p>
                )}
              </div>
            </div>
          </div>



          {leave.images && leave.images.length > 0 && (
  <div className="mt-6">
    <h3 className="text-lg font-bold mb-2">Imágenes:</h3>
    <div className="grid grid-cols-3 gap-4">
      {leave.images.map((img, index) => (
        <img key={index} src={img} alt={`leave-${index}`} className="rounded-md" />
      ))}
    </div>
  </div>
)}




        </div>
      ) : (
        <div>Loading ...</div>
      )}
    </>
  );
};

export default Detail;
