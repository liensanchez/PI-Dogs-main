import React from 'react'
import { useState } from 'react'

function SearchBar() {

  const [raza, setRaza] = useState('')

  const handleChange = e => {
   
    setRaza(e.target.value)
  }

  
  const search = (raza) => {
   
    console.log(raza)
  }

  return (
    <>
      <input type='search' onChange={handleChange} name='search' placeholder='Ingresa una Raza'/>
      <button onClick={search}>Buscar</button>
    </>
  )
}

export default SearchBar