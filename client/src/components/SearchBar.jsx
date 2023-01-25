import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

function SearchBar() {

  const [raza, setRaza] = useState('')

  const handleChange = e => {
   
    setRaza(e.target.value)

  }
  
  const search = async () => {

    const searchResponse = await axios.get(`http://localhost:3003/dogs?name=${raza}`)
    
    setRaza(searchResponse.data)

  }

/*   <Link to={`/dogs/${dog.id}` } > 
  <button>Mas info</button>
  </Link>
 */

  return (
    <>
      <input type='search' onChange={handleChange} name='search' placeholder='Ingresa una Raza'/>
      <button onClick={search}>Buscar</button>
    </>
  )
}


export default SearchBar