import React from 'react'
import axios from 'axios'
import { useLocation } from 'react-router-dom'
import { useState, useEffect } from 'react'
import Cards from './Cards'

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

  }, [search])


  return (
    <>
    <h1>Search Results:</h1>
      <Cards dog={dog}/>
    </>
  )
}

export default SearchResults