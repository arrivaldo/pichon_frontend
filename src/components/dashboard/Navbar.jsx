import React, { useState } from 'react'
import { useAuth } from '../../context/AuthContext'


const Navbar = () => {
    const {user, logout} = useAuth()


  return (
    <div style={{background: '#083957'}} className='flex items-center xs:flex-col text-white justify-between h-12 bg-teal-600 px-5'>
        <p>Bienvenido {user.name}</p>
        <button className='px-4 py-1 border hover:bg-black'
        onClick={logout}
        >Salir</button>
    </div>
  )
}

export default Navbar