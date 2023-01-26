import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react'
import Cards from './Cards'

function Home() {

  const [dog, setDog] = useState([])

  useEffect(() => {

    async function getData() {

      const dogsResponse = await axios.get('http://localhost:3003/dogs')
    
      setDog(dogsResponse.data)
    }    

    getData()

  }, [])


  return (
    <>
      <Cards dog={dog}/>
    </>
  )
}


export default Home