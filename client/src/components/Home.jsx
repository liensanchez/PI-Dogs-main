import React from 'react'
import axios from 'axios'
import { useState } from 'react'
import { Link } from 'react-router-dom'

function Home() {

  const [dog, setDog] = useState([])

  const showDogs = async () => {
    
    const dogsResponse = await axios.get('http://localhost:3003/dogs')
    
    setDog(dogsResponse.data)

  }

  const allDogs = dog

  console.log(allDogs)

  return (
    <div>
      <button onClick={showDogs}>Ver Perros</button>
      {allDogs.map((dog) => (
        <div key={dog.id}>
          <h1 >{dog.name}</h1>
          <img src={dog.image} alt="" />
          <Link to={'http://localhost:3003/dogs/' + dog.id} > 
            <button>Mas info</button>
          </Link>
        </div>
      ))}
    </div>
  )
}

/*`http://localhost:3003/dogs/${dog.id}`  */

export default Home