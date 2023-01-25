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
    fetch()
      .then((response) => console.log(response.json()))
  }

  return (
    <>
      <input type='search' onChange={handleChange} name='search' placeholder='Ingresa una Raza'/>
      <button onClick={search}>Buscar</button>
    </>
  )
}


export default SearchBar