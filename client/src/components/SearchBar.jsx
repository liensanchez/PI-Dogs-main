import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function SearchBar() {

  const navigate = useNavigate()

  const [searchBreed, setSearchBreed] = useState('')


  const handleChange = e => {
   
    setSearchBreed(e.target.value)
  }
  
  const search = async () => {
        
    navigate(`/dogs?name=${searchBreed}`)
  }

  return (
    <>
      <input type='search' onChange={handleChange} name='search' placeholder='Ingresa una Raza'/>
      <button onClick={search}>Search breed</button>
    </>
  )
}


export default SearchBar