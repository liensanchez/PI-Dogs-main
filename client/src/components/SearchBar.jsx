import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function SearchBar() {

  const navigate = useNavigate()

  const [busquedaRaza, setBusquedaRaza] = useState('')


  const handleChange = e => {
   
    setBusquedaRaza(e.target.value)
  }
  
  const search = async () => {
        
    navigate(`/dogs?name=${busquedaRaza}`)
  }

  return (
    <>
      <input type='search' onChange={handleChange} name='search' placeholder='Ingresa una Raza'/>
      <button onClick={search}>Buscar</button>
    </>
  )
}


export default SearchBar