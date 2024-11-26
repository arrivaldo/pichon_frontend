import React, { useState } from 'react'
import axios from 'axios'
import { useAuth } from "../context/AuthContext"
import { useNavigate } from 'react-router-dom'
import HomeNavbar from '../components/HomeNavbar'
import HomeNavbar2 from '../components/HomwNavbar2'

const Login = () => {


const [email, setEmail] = useState('')
const [password, setPassword] = useState('')
const [error, setError] = useState(null)
const {login} = useAuth()
const navigate = useNavigate()

const handleSubmit = async (e) => {
    e.preventDefault()

    try {

        const response = await axios.post("http://localhost:5000/api/auth/login",
             {email, password}
            );

            if(response.data.success) {
                console.log("Succesfully Login")
                login(response.data.user)
                localStorage.setItem("token", response.data.token)
                if(response.data.user.role === "admin")
                {
                    navigate('/admin-dashboard')
                } else {
                    navigate("/employee-dashboard")
                }
            }

    } catch(error) {
        if(error.response && !error.response.data.success) {
            setError(error.response.data.error)
        } else {
            setError("Server Error")
        }
    }

}
const handleLogoClick = () => {
    navigate('/');
  };


  return (
    <>
    {/* <HomeNavbar2 /> */}
    <div className="relative h-screen w-full bg-slate-950">
  {/* Radial Gradient Background */}
  <div className="absolute top-0 left-0 right-0 bottom-1/2 bg-[radial-gradient(circle_500px_at_50%_200px,#002d934a,#00000024)]"></div>
  {/* White Bottom Half */}
  <div className="absolute top-1/2 left-0 right-0 bottom-0 bg-white"></div>

  {/* Content */}
  <div className="relative flex flex-col items-center h-full justify-center space-y-6">
    <div         onClick={handleLogoClick}  className="font-bold font-pacific text-3xl mb-4 text-white cursor-pointer">CDS Estafeta NLD</div>
    <div className="border shadow p-6 w-80 bg-white">
      <h2 className="text-2xl font-bold mb-4">Ingresar</h2>
      {error && <p className="text-red-500">{error}</p>}
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700">
            Email
          </label>
          <input
            type="email"
            placeholder="Insertar Email"
            className="w-full px-3 py-2 border"
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label className="block text-gray-700" htmlFor="password">
            Contraseña
          </label>
          <input
            type="password"
            placeholder="*********"
            className="w-full px-3 py-2 border"
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        <div className="mb-4 flex items-center justify-center mt-2">
          <label className="inline-flex items-center">
            <input type="checkbox" className="form-checkbox" />
            <span className="ml-2 text-gray-700">Recuérdame</span>
          </label>
          <a href="#" className="text-teal-600 ml-2">
            Olvido Contraseña?
          </a>
        </div>

        <div className="mb-4">
          <button type="submit" className="w-full bg-[#000000] text-white py-2">
            Ingresar
          </button>
        </div>
      </form>
    </div>
  </div>
</div>

    
    </>
  )
}

export default Login