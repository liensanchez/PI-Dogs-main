import React from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'

function Home() {

  const [dog, setDog] = useState([])


  useEffect(async () => {
    const dogsResponse = await axios.get('http://localhost:3003/dogs')
    
    setDog(dogsResponse.data)
  }, [])


  return (
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
  )
}


export default Home