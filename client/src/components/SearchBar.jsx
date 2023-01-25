import React from 'react'
import { useState } from 'react'
import axios from 'axios'

function SearchBar() {

  const [raza, setRaza] = useState('')

  const handleChange = e => {
   
    setRaza(e.target.value)

  }

  
  const search = () => {

    axios.get(`http://localhost:3003/dogs?name=${raza}`)
      .then(data => data.data)

  }

  return (
    <>
      <input type='search' onChange={handleChange} name='search' placeholder='Ingresa una Raza'/>
      <button onClick={search}>Buscar</button>
    </>
  )
}


export default SearchBar