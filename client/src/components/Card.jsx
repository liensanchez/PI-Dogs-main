import React from 'react'
import { Link } from 'react-router-dom'

function Card(dog) {


  return (
    <>
      <div key={dog.id}>
        <h1 >{dog.name}</h1>
        <img src={dog.img} alt="" />
        <p>{dog.temperament}</p>
        <p>De {dog.weight} kilos</p>
        <Link to={`/dogs/${dog.id}` } > 
          <button>Mas info</button>
        </Link>
      </div>
    </>
  )
}

export default Card