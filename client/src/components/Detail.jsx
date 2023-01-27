import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom';

function Detail() {

  let {id} = useParams()

  const [dog, setDog] = useState([])

  useEffect(() => {

    async function getData() {
      
      const dogsResponse = await axios.get(`http://localhost:3003/dogs/${id}`)

      setDog(dogsResponse.data)
    }    

    getData()
  }, [id])

  return (
    <>
      {dog.map((dog) => (
        <div key={dog.id}>
        <h1 >{dog.name}</h1>
        <img src={dog.image} alt="" />
        <p>{dog.temperament}</p>
        <p>De {dog.weight} kilos</p>
        <p>De {dog.height} cm de alura</p>
        <p>Between {dog.lifeSpan} of life</p>
      </div>
      ))}
      <Link to='/home'>
        <button>Back to Home</button>
      </Link>
    </>
  )
}

export default Detail