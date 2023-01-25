import React from 'react'
import axios from 'axios'
import { Link, useLocation } from 'react-router-dom'
import { useState, useEffect } from 'react'

function SearchResults() {

  const [dog, setDog] = useState([])

  const location = useLocation()

  const query = new URLSearchParams(location.search)

  const search = query.get('name')

  useEffect(() => {

    async function getData() {

      const dogsResponse = await axios.get(`http://localhost:3003/dogs?name=${search}`)
    
      setDog(dogsResponse.data)
    }    

    getData()

  }, [])


  return (
    <>
    <h1>Search Results:</h1>
     <div>
      {dog.map((dog) => (
        <div key={dog.id}>
          <h1 >{dog.name}</h1>
          <img src={dog.image} alt="" />
          <p>{dog.temperament}</p>
          <p>De {dog.weight} kilos</p>
          <Link to={`/dogs/${dog.id}` } > 
            <button>Mas info</button>
          </Link>
        </div>
      ))}
    </div> 
    </>
  )
}

export default SearchResults