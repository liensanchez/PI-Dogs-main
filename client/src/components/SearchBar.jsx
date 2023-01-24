import React from 'react'
import { useState } from 'react'

function SearchBar() {

  const [raza, setRaza] = useState('')

  const handleChange = e => {
   
    setRaza(e.target.value)

  }

  
  const search = () => {

    fetch(`http://localhost:3003/dogs?name=${raza}`)
      .then((response) => console.log(response.json()))
  }

  return (
    <>
      <input type='search' onChange={handleChange} name='search' placeholder='Ingresa una Raza'/>
      <button onClick={search}>Buscar</button>
    </>
  )
}

/*   ESTAS MUTEADO!!!!! */


export default SearchBar